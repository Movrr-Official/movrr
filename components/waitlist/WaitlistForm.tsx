"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@vercel/analytics";
import { waitlistSchema, type WaitlistInput } from "@/lib/waitlist/schema";
import { submitWaitlist } from "@/app/actions/waitlist";

// ─── Static data ─────────────────────────────────────────────────────────────

interface AudienceOption {
  id: WaitlistInput["audience"];
  label: string;
  description: string;
  submitLabel: string;
  namePlaceholder: string;
}

const audiences: AudienceOption[] = [
  {
    id: "rider",
    label: "Rider",
    description:
      "You cycle, scoot, or walk city routes and want to earn from every trip.",
    submitLabel: "Register as a rider",
    namePlaceholder: "Your name",
  },
  {
    id: "brand",
    label: "Brand",
    description:
      "You run campaigns and need verified reach among active city riders.",
    submitLabel: "Register your brand",
    namePlaceholder: "Your name or company",
  },
  {
    id: "partner",
    label: "Partner",
    description:
      "You build products or platforms that touch how people move through cities.",
    submitLabel: "Register as a partner",
    namePlaceholder: "Your name or company",
  },
];

const benefits = [
  {
    label: "Priority notification",
    note: "You hear first when your city opens.",
  },
  {
    label: "Priority access",
    note: "Early access shapes what MOVRR becomes in your city.",
  },
  {
    label: "No commitment",
    note: "Registration holds your place. Nothing more.",
  },
];

const bikeOptions: {
  id: NonNullable<WaitlistInput["bikeOwnership"]>;
  label: string;
}[] = [
  { id: "own", label: "I own one" },
  { id: "interested", label: "Not yet, but interested" },
  { id: "planning", label: "Planning to get one" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<WaitlistInput | null>(
    null,
  );
  const [serverError, setServerError] = useState<string | null>(null);
  const [showBikeField, setShowBikeField] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    mode: "onBlur",
    defaultValues: {
      audience: "rider",
      name: "",
      email: "",
      city: "",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const audience = watch("audience");
  const bikeOwnership = watch("bikeOwnership");
  const currentAudience = audiences.find((a) => a.id === audience)!;

  const onSubmit = handleSubmit((data) => {
    setServerError(null);
    track("waitlist_submit_attempt", {
      audience: data.audience,
      city: data.city,
    });
    startTransition(async () => {
      const params = new URLSearchParams(window.location.search);
      const result = await submitWaitlist({
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
      });
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
        setSubmittedData(data);
        setSubmitted(true);
      }
    });
  });

  return (
    <section className="border-b border-movrr-border-soft bg-movrr-bg-canvas">
      <div className="movrr-shell py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-28">
          {/* Left — context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-5 text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-movrr-text-brand">
              Register early.
            </h2>

            <p className="mb-14 max-w-xs text-base leading-relaxed text-movrr-text-brand/50">
              MOVRR opens city by city. Register early and get priority access
              when your city launches.
            </p>

            {/* Benefits */}
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

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-80 flex-col justify-center"
                >
                  <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-movrr-text-brand/30">
                    You&apos;re in the first wave.
                  </p>
                  <h3 className="mb-5 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.04em] text-movrr-text-brand">
                    You&apos;re in.
                  </h3>
                  <p className="mb-8 max-w-xs text-base leading-relaxed text-movrr-text-brand/50">
                    We&apos;ll reach out when MOVRR opens
                    {submittedData?.city
                      ? ` in ${submittedData.city}`
                      : " in your city"}
                    .
                  </p>
                  <p className="text-xs text-movrr-text-brand/25">
                    Registered as a {submittedData?.audience} ·{" "}
                    {submittedData?.email}
                  </p>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Audience selector */}
                  <div className="mb-9">
                    <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-movrr-text-brand/30">
                      I am a
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

                  {/* Fields */}
                  <div className="space-y-5">
                    {/* Name + City row */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="wl-name"
                          className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35"
                        >
                          Name
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
                          City
                        </label>
                        <input
                          id="wl-city"
                          type="text"
                          autoComplete="address-level2"
                          placeholder="Rotterdam, The Hague…"
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

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="wl-email"
                        className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-movrr-text-brand/35"
                      >
                        Email
                      </label>
                      <input
                        id="wl-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        {...register("email")}
                        className="w-full rounded-xl border border-movrr-border-soft bg-transparent px-4 py-3.5 text-sm text-movrr-text-brand placeholder:text-movrr-text-brand/25 outline-none transition-colors duration-200 focus:border-movrr-text-brand/40 focus-visible:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-movrr-error">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Bike status — rider only, hidden by default */}
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
                                Do you own a bike? (optional)
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
                                  Do you own a bike?
                                  <span className="ml-1.5 font-normal normal-case tracking-normal text-movrr-text-brand/25">
                                    optional
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

                  {/* Submit */}
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
                          ? "Registering…"
                          : currentAudience.submitLabel}
                      </motion.button>
                    </AnimatePresence>
                    <p className="mt-4 text-xs text-movrr-text-brand/25">
                      No spam. Unsubscribe any time.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
