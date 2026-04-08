export type ConsentCategory = "necessary" | "analytics" | "marketing";

export interface ConsentState {
  necessary: true; // always true, non-toggleable
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentRecord {
  /** Semver-style policy version. Increment to re-prompt users. */
  version: string;
  state: ConsentState;
  /** ISO timestamp of when consent was recorded. */
  recordedAt: string;
  /** "banner" = one-click accept/reject, "modal" = granular preferences */
  source: "banner" | "modal";
}

export type ConsentChangeListener = (record: ConsentRecord) => void;

/**
 * The consent service API surface.
 * OneTrust (or any other CMP) can be swapped in behind this interface.
 */
export interface IConsentService {
  getConsent(): ConsentRecord | null;
  setConsent(state: Partial<Omit<ConsentState, "necessary">>, source: ConsentRecord["source"]): ConsentRecord;
  acceptAll(source?: ConsentRecord["source"]): ConsentRecord;
  rejectAll(source?: ConsentRecord["source"]): ConsentRecord;
  onConsentChange(listener: ConsentChangeListener): () => void;
  shouldReprompt(): boolean;
  clearConsent(): void;
}
