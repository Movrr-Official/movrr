/**
 * MOVRR Consent Service
 *
 * Pure service layer — no React, SSR-safe.
 * OneTrust integration: replace this module with an adapter that calls
 * OneTrust.getConsent() / OneTrust.setConsent() while implementing IConsentService.
 *
 * Script control hooks are wired here. Register scripts via registerConditionalScript().
 */

import type {
  ConsentRecord,
  ConsentState,
  ConsentChangeListener,
  IConsentService,
} from "./types";

const STORAGE_KEY = "movrr_consent";

/**
 * Increment this when the privacy policy or cookie policy changes.
 * Users who consented under an older version will be re-prompted.
 */
export const CONSENT_POLICY_VERSION = "1.0.0";

// ---------------------------------------------------------------------------
// Internal state
// ---------------------------------------------------------------------------

const listeners = new Set<ConsentChangeListener>();

function isClient(): boolean {
  return typeof window !== "undefined";
}

function read(): ConsentRecord | null {
  if (!isClient()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentRecord) : null;
  } catch {
    return null;
  }
}

function write(record: ConsentRecord): void {
  if (!isClient()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {}
}

function emit(record: ConsentRecord): void {
  listeners.forEach((fn) => fn(record));
  // Fire custom DOM event for non-React consumers (GTM, etc.)
  if (isClient()) {
    window.dispatchEvent(
      new CustomEvent("movrr:consentchange", { detail: record })
    );
    // Activate/deactivate conditional scripts
    applyScriptControl(record.state);
  }
}

// ---------------------------------------------------------------------------
// Script control registry
// ---------------------------------------------------------------------------

interface ConditionalScript {
  category: keyof Omit<ConsentState, "necessary">;
  activate: () => void;
  deactivate: () => void;
}

const scriptRegistry: ConditionalScript[] = [];

/**
 * Register a script that should only run with consent.
 *
 * @example
 * registerConditionalScript({
 *   category: "analytics",
 *   activate: () => { window.gtag?.("consent", "update", { analytics_storage: "granted" }) },
 *   deactivate: () => { window.gtag?.("consent", "update", { analytics_storage: "denied" }) },
 * });
 */
export function registerConditionalScript(script: ConditionalScript): void {
  scriptRegistry.push(script);
  // If consent already granted, activate immediately
  const record = read();
  if (record?.state[script.category]) {
    script.activate();
  }
}

function applyScriptControl(state: ConsentState): void {
  scriptRegistry.forEach((script) => {
    if (state[script.category]) {
      script.activate();
    } else {
      script.deactivate();
    }
  });
}

// ---------------------------------------------------------------------------
// Service implementation
// ---------------------------------------------------------------------------

function buildRecord(
  partial: Partial<Omit<ConsentState, "necessary">>,
  source: ConsentRecord["source"]
): ConsentRecord {
  const existing = read();
  return {
    version: CONSENT_POLICY_VERSION,
    state: {
      necessary: true,
      analytics: partial.analytics ?? existing?.state.analytics ?? false,
      marketing: partial.marketing ?? existing?.state.marketing ?? false,
    },
    recordedAt: new Date().toISOString(),
    source,
  };
}

export const consentService: IConsentService = {
  getConsent(): ConsentRecord | null {
    return read();
  },

  setConsent(
    state: Partial<Omit<ConsentState, "necessary">>,
    source: ConsentRecord["source"]
  ): ConsentRecord {
    const record = buildRecord(state, source);
    write(record);
    emit(record);
    return record;
  },

  acceptAll(source: ConsentRecord["source"] = "banner"): ConsentRecord {
    return consentService.setConsent({ analytics: true, marketing: true }, source);
  },

  rejectAll(source: ConsentRecord["source"] = "banner"): ConsentRecord {
    return consentService.setConsent({ analytics: false, marketing: false }, source);
  },

  onConsentChange(listener: ConsentChangeListener): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  /**
   * Returns true if user has never consented, or consented under an old policy version.
   */
  shouldReprompt(): boolean {
    if (!isClient()) return false;
    const record = read();
    if (!record) return true;
    return record.version !== CONSENT_POLICY_VERSION;
  },

  clearConsent(): void {
    if (!isClient()) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  },
};
