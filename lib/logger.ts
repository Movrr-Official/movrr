/**
 * Production-safe logging utility
 * In production, only errors are logged
 * In development, all logs are shown
 */

type LogLevel = "debug" | "info" | "warn" | "error";

class Logger {
  private isDevelopment = process.env.NODE_ENV === "development";
  private isProduction = process.env.NODE_ENV === "production";

  private shouldLog(level: LogLevel): boolean {
    if (this.isDevelopment) {
      return true; // Log everything in development
    }

    // In production, only log errors and warnings
    return level === "error" || level === "warn";
  }

  debug(...args: unknown[]): void {
    if (this.shouldLog("debug")) {
      console.debug("[DEBUG]", ...args);
    }
  }

  info(...args: unknown[]): void {
    if (this.shouldLog("info")) {
      console.info("[INFO]", ...args);
    }
  }

  warn(...args: unknown[]): void {
    if (this.shouldLog("warn")) {
      console.warn("[WARN]", ...args);
    }
  }

  error(...args: unknown[]): void {
    if (this.shouldLog("error")) {
      console.error("[ERROR]", ...args);
      
      // In production, you might want to send errors to a logging service
      if (this.isProduction) {
        // TODO: Integrate with error tracking service (e.g., Sentry, LogRocket)
        // Example: Sentry.captureException(new Error(args.join(" ")));
      }
    }
  }

  /**
   * Logs errors with context for better debugging
   */
  errorWithContext(
    message: string,
    error: Error | unknown,
    context?: Record<string, unknown>
  ): void {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;

    this.error(message, {
      error: errorMessage,
      stack: errorStack,
      ...context,
    });
  }
}

export const logger = new Logger();
