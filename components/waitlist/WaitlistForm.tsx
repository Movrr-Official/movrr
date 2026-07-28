"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@vercel/analytics";
import { createWaitlistSchema, type WaitlistInput } from "@/lib/waitlist/schema";
import { submitWaitlist } from "@/app/actions/waitlist";
import {
  audienceFromPath,
  clearWaitlistDraft,
  matchLaunchCity,
  readWaitlistDraft,
  writeWaitlistDraft,
  type WaitlistAudience,
} from "@/lib/waitlist/prefill";
import type { WaitlistCopy } from "@/locales/types";
import type { Locale } from "@/lib/i18n/config";

export function WaitlistForm({
  copy,
  locale,
  initialAudience = null,
  initialCity = "",
  cityFromQuery = false,
  launchCities = [],
}: {
  copy: WaitlistCopy["form"];
  locale: Locale;
  initialAudience?: WaitlistAudience | null;
  initialCity?: string;
  /** When true, draft must not override the URL ?city= value. */
  cityFromQuery?: boolean;
  /** Used to localize IP city labels when they match a launch market. */
  launchCities?: string[];
}) {
  const audiences = copy.audiences;
  const benefits = copy.benefits;
  const bikeOptions = copy.bikeOptions;
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<WaitlistInput | null>(
    null,
  );
  const [serverError, setServerError] = useState<string | null>(null);
  const [showBikeField, setShowBikeField] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [draftReady, setDraftReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const draftHydrated = useRef(false);

  const schema = useMemo(
    () => createWaitlistSchema(copy.validation),
    [copy.validation],
  );
  const form = useForm<WaitlistInput>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      audience: initialAudience ?? "rider",
      name: "",
      email: "",
      city: initialCity,
    },
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors, dirtyFields },
  } = form;

  const audience =
    useWatch({
      control,
      name: "audience",
      defaultValue: initialAudience ?? "rider",
    }) ??
    initialAudience ??
    "rider";
  const bikeOwnership = useWatch({ control, name: "bikeOwnership" });
  const city = useWatch({ control, name: "city", defaultValue: initialCity });
  const name = useWatch({ control, name: "name", defaultValue: "" });
  const email = useWatch({ control, name: "email", defaultValue: "" });
  const currentAudience =
    audiences.find((a) => a.id === audience) ?? audiences[0];

  // Defer interactive fields until after mount so password-manager extensions
  // (e.g. attributes like data-sharkid / fdprocessedid) cannot mutate SSR HTML
  // before React hydrates.
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || draftHydrated.current) return;
    draftHydrated.current = true;

    const draft = readWaitlistDraft();
    let referrerAudience: WaitlistAudience | null = null;
    try {
      if (document.referrer) {
        referrerAudience = audienceFromPath(
          new URL(document.referrer).pathname,
        );
      }
    } catch {
      referrerAudience = null;
    }

    if (!initialAudience) {
      const next = draft?.audience ?? referrerAudience;
      if (next && next !== getValues("audience")) {
        setValue("audience", next);
      }
    }

    if (draft?.name) setValue("name", draft.name);
    if (draft?.email) setValue("email", draft.email);

    // Draft must not override URL or server geo. Also drop stale soft-IP
    // towns that are not launch markets (legacy drafts like Oost-Souburg).
    const draftCity = draft?.city?.trim() ?? "";
    const draftLaunchCity = draftCity
      ? matchLaunchCity(draftCity, launchCities)
      : null;
    if (!cityFromQuery && !initialCity && draftLaunchCity) {
      setValue("city", draftLaunchCity);
    } else if (draftCity && !draftLaunchCity) {
      writeWaitlistDraft({
        audience: draft?.audience,
        name: draft?.name ?? "",
        email: draft?.email ?? "",
        city: "",
      });
    }

    setDraftReady(true);

    // Soft IP city fill: launch markets only (no GPS permission prompt).
    if (!cityFromQuery && !initialCity && !draftLaunchCity) {
      void (async () => {
        try {
          const res = await fetch("/api/geo", { cache: "no-store" });
          if (!res.ok) return;
          const data = (await res.json()) as { city?: string | null };
          const geoCity = data.city?.trim();
          if (!geoCity || getValues("city")?.trim()) return;
          const localized = matchLaunchCity(geoCity, launchCities);
          if (!localized) return;
          setValue("city", localized, { shouldDirty: false });
        } catch {
          // Ignore — city stays blank for the user to fill.
        }
      })();
    }
  }, [
    cityFromQuery,
    getValues,
    initialAudience,
    initialCity,
    launchCities,
    mounted,
    setValue,
  ]);

  useEffect(() => {
    if (!draftReady || submitted) return;
    // Persist free-text city only after the user edits it. Soft IP launch
    // matches may be stored; raw ISP towns must never land in the draft.
    const cityToStore = dirtyFields.city
      ? (city ?? "")
      : (matchLaunchCity(city ?? "", launchCities) ?? "");
    writeWaitlistDraft({
      audience,
      name: name ?? "",
      email: email ?? "",
      city: cityToStore,
    });
  }, [
    audience,
    city,
    dirtyFields.city,
    draftReady,
    email,
    launchCities,
    name,
    submitted,
  ]);

  const onSubmit = handleSubmit((data) => {
    setServerError(null);
    track("waitlist_submit_attempt", {
      audience: data.audience,
      city: data.city,
    });
    startTransition(async () => {
      const params = new URLSearchParams(window.location.search);
      const result = await submitWaitlist(
        {
          ...data,
          utm_source: params.get("utm_source") ?? undefined,
          utm_medium: params.get("utm_medium") ?? undefined,
          utm_campaign: params.get("utm_campaign") ?? undefined,
          utm_content: params.get("utm_content") ?? undefined,
          utm_term: params.get("utm_term") ?? undefined,
          referrer: document.referrer
            ? document.referrer.slice(0, 500)
            : undefined,
          landing_path: window.location.pathname.slice(0, 500),
        },
        locale,
      );
      if (!result.success) {
        track("waitlist_submit_error", {
          audience: data.audience,
          error: result.error,
        });
        setServerError(result.error);
      } else {
        track("waitlist_submit_success", {
          audience: data.audience,
          city: data.city,
        });
        clearWaitlistDraft();
        setSubmittedData(data);
        setSubmitted(true);
      }
    });
  });

  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas">
      <div className="movrr-shell py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-5 text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-brand">
              {copy.heading}
            </h2>

            <p className="mb-14 max-w-xs text-base leading-relaxed text-movrr-text-brand/50">
              {copy.introduction}
            </p>

            <div className="space-y-6 border-t border-movrr-border-soft pt-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-movrr-success" />
                  <div>
                    <p className="text-sm font-semibold text-movrr-text-brand">
                      {b.label}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-movrr-text-brand/40">
                      {b.note}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {!mounted ? (
              <div className="min-h-80" aria-hidden />
            ) : (
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-80 flex-col justify-center"
                >
                  <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-movrr-text-brand/30">
                    {copy.success.eyebrow}
                  </p>
                  <h3 className="mb-5 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-brand">
                    {copy.success.title}
                  </h3>
                  <p className="mb-8 max-w-xs text-base leading-relaxed text-movrr-text-brand/50">
                    {copy.success.cityPrefix}{" "}
                    {submittedData?.city || copy.success.cityFallback}.
                  </p>
                  <p className="text-xs text-movrr-text-brand/25">
                    {copy.success.registeredAs}{" "}
                    {submittedData?.audience
                      ? copy.success.audienceNames[submittedData.audience]
                      : ""}{" "}
                    · {submittedData?.email}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-9">
                    <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-movrr-text-brand/30">
                      {copy.audienceLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {audiences.map((a) => (
                        <button
                          key={a.id}
                          type="button"
                          onClick={() => {
                            setValue("audience", a.id, {
                              shouldValidate: true,
                            });
                            setShowBikeField(false);
                            track("waitlist_audience_selected", {
                              audience: a.id,
                            });
                          }}
                          className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                            audience === a.id
                              ? "border-movrr-bg-secondary bg-movrr-bg-secondary text-movrr-text-inverse"
                              : "border-movrr-border-soft text-movrr-text-brand/35 hover:border-movrr-text-brand/30 hover:text-movrr-text-brand/70"
                          }`}
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={audience}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-3 text-xs leading-relaxed text-movrr-text-brand/35"
                      >
                        {currentAudience.description}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="wl-name"
                          className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35"
                        >
                          {copy.fields.name}
                        </label>
                        <input
                          id="wl-name"
                          type="text"
                          autoComplete="name"
                          placeholder={currentAudience.namePlaceholder}
                          {...register("name")}
                          className="w-full rounded-xl border border-movrr-border-soft bg-transparent px-4 py-3.5 text-sm text-movrr-text-brand placeholder:text-movrr-text-brand/25 outline-none transition-colors duration-200 focus:border-movrr-text-brand/40 focus-visible:outline-none"
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-movrr-error">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="wl-city"
                          className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35"
                        >
                          {copy.fields.city}
                        </label>
                        <input
                          id="wl-city"
                          type="text"
                          autoComplete="address-level2"
                          placeholder={copy.fields.cityPlaceholder}
                          {...register("city")}
                          className="w-full rounded-xl border border-movrr-border-soft bg-transparent px-4 py-3.5 text-sm text-movrr-text-brand placeholder:text-movrr-text-brand/25 outline-none transition-colors duration-200 focus:border-movrr-text-brand/40 focus-visible:outline-none"
                        />
                        {errors.city && (
                          <p className="mt-1.5 text-xs text-movrr-error">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="wl-email"
                        className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35"
                      >
                        {copy.fields.email}
                      </label>
                      <input
                        id="wl-email"
                        type="email"
                        autoComplete="email"
                        placeholder={copy.fields.emailPlaceholder}
                        {...register("email")}
                        className="w-full rounded-xl border border-movrr-border-soft bg-transparent px-4 py-3.5 text-sm text-movrr-text-brand placeholder:text-movrr-text-brand/25 outline-none transition-colors duration-200 focus:border-movrr-text-brand/40 focus-visible:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-movrr-error">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <AnimatePresence>
                      {audience === "rider" && (
                        <motion.div
                          key="bike-status"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <AnimatePresence mode="wait">
                            {!showBikeField ? (
                              <motion.button
                                key="reveal"
                                type="button"
                                onClick={() => setShowBikeField(true)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-xs text-movrr-text-brand/30 underline underline-offset-2 transition-colors duration-150 hover:text-movrr-text-brand/55"
                              >
                                {copy.fields.bikeQuestion} ({copy.fields.optional})
                              </motion.button>
                            ) : (
                              <motion.div
                                key="pills"
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              >
                                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35">
                                  {copy.fields.bikeQuestion}
                                  <span className="ml-1.5 font-normal normal-case tracking-normal text-movrr-text-brand/25">
                                    {copy.fields.optional}
                                  </span>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {bikeOptions.map((o) => (
                                    <button
                                      key={o.id}
                                      type="button"
                                      onClick={() =>
                                        setValue(
                                          "bikeOwnership",
                                          bikeOwnership === o.id
                                            ? undefined
                                            : o.id,
                                          { shouldValidate: true },
                                        )
                                      }
                                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                                        bikeOwnership === o.id
                                          ? "border-movrr-bg-secondary bg-movrr-bg-secondary text-movrr-text-inverse"
                                          : "border-movrr-border-soft text-movrr-text-brand/35 hover:border-movrr-text-brand/30 hover:text-movrr-text-brand/70"
                                      }`}
                                    >
                                      {o.label}
                                    </button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-8">
                    {serverError && (
                      <p className="mb-4 text-xs text-movrr-error">
                        {serverError}
                      </p>
                    )}
                    <AnimatePresence mode="wait">
                      <motion.button
                        key={audience}
                        type="submit"
                        disabled={isPending}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full rounded-xl bg-movrr-bg-secondary py-4 text-sm font-semibold text-movrr-text-inverse transition-opacity duration-200 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {isPending
                          ? copy.submitting
                          : currentAudience.submitLabel}
                      </motion.button>
                    </AnimatePresence>
                    <p className="mt-4 text-xs text-movrr-text-brand/25">
                      {copy.noSpam}
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
