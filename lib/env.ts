/**
 * Environment variable validation and type-safe access
 * Validates required environment variables at startup
 */

const requiredEnvVars = {
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

  // Email (Resend)
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  FROM_EMAIL: process.env.FROM_EMAIL,
  TO_EMAIL: process.env.TO_EMAIL,

  // Mailchimp
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
  MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX,
  MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
} as const;

const optionalEnvVars = {
  // ATS (optional)
  ATS_PROVIDER: process.env.ATS_PROVIDER,
  ATS_API_KEY: process.env.ATS_API_KEY,

  // Feature flags
  NEXT_PUBLIC_IS_HIRING: process.env.NEXT_PUBLIC_IS_HIRING,
  NEXT_PUBLIC_CBID: process.env.NEXT_PUBLIC_CBID,

  // Build config
  NEXT_OUTPUT_MODE: process.env.NEXT_OUTPUT_MODE,
} as const;

/**
 * Validates that all required environment variables are present
 * Throws an error with a helpful message if any are missing
 */
export function validateEnvVars() {
  const missing: string[] = [];

  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value || value.trim() === "") {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}\n` +
        "Please check your .env file or environment configuration."
    );
  }
}

/**
 * Type-safe environment variable access
 */
export const env = {
  // Supabase
  supabase: {
    url: requiredEnvVars.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: requiredEnvVars.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  },

  // Email
  email: {
    resendApiKey: requiredEnvVars.RESEND_API_KEY!,
    from: requiredEnvVars.FROM_EMAIL!,
    to: requiredEnvVars.TO_EMAIL!,
  },

  // Mailchimp
  mailchimp: {
    apiKey: requiredEnvVars.MAILCHIMP_API_KEY!,
    serverPrefix: requiredEnvVars.MAILCHIMP_SERVER_PREFIX!,
    audienceId: requiredEnvVars.MAILCHIMP_AUDIENCE_ID!,
  },

  // Optional
  ats: {
    provider: optionalEnvVars.ATS_PROVIDER,
    apiKey: optionalEnvVars.ATS_API_KEY,
  },

  features: {
    isHiring: optionalEnvVars.NEXT_PUBLIC_IS_HIRING === "true",
    cookiebotId: optionalEnvVars.NEXT_PUBLIC_CBID,
  },

  build: {
    outputMode: optionalEnvVars.NEXT_OUTPUT_MODE,
  },
} as const;

// Validate on module load (server-side only)
if (typeof window === "undefined") {
  try {
    validateEnvVars();
  } catch (error) {
    // In development, log the error but don't crash
    if (process.env.NODE_ENV === "development") {
      console.error("⚠️ Environment variable validation failed:", error);
    } else {
      // In production, throw to prevent deployment with missing vars
      throw error;
    }
  }
}
