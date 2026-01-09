/**
 * Rate limiting utility for API routes and server actions
 * Uses in-memory storage (for serverless, consider Redis in production)
 */

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

interface RateLimitOptions {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  identifier?: string; // Optional custom identifier
}

/**
 * Rate limit check
 * @param identifier - Unique identifier (IP, user ID, etc.)
 * @param options - Rate limit options
 * @returns Object with allowed status and remaining requests
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions
): { allowed: boolean; remaining: number; resetTime: number } {
  const { windowMs, maxRequests } = options;
  const now = Date.now();
  const key = options.identifier
    ? `${options.identifier}:${identifier}`
    : identifier;

  const record = store[key];

  // If no record or window expired, create new record
  if (!record || now > record.resetTime) {
    store[key] = {
      count: 1,
      resetTime: now + windowMs,
    };

    // Clean up expired entries periodically
    if (Math.random() < 0.01) {
      // 1% chance to clean up
      cleanupExpiredEntries();
    }

    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime: now + windowMs,
    };
  }

  // Increment count
  record.count += 1;

  // Check if limit exceeded
  if (record.count > maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetTime: record.resetTime,
  };
}

/**
 * Clean up expired entries from the store
 */
function cleanupExpiredEntries(): void {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}

/**
 * Get client IP from request headers
 */
export function getClientIP(headers: Headers): string {
  // Check various headers for IP address
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  return "unknown";
}

/**
 * Rate limit middleware for Next.js API routes
 */
export function rateLimitMiddleware(
  options: RateLimitOptions
): (request: Request) => Promise<Response | null> {
  return async (request: Request): Promise<Response | null> => {
    const identifier = getClientIP(request.headers);
    const result = checkRateLimit(identifier, options);

    if (!result.allowed) {
      return new Response(
        JSON.stringify({
          error: "Too many requests",
          message: "Rate limit exceeded. Please try again later.",
          resetTime: result.resetTime,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "X-RateLimit-Limit": options.maxRequests.toString(),
            "X-RateLimit-Remaining": result.remaining.toString(),
            "X-RateLimit-Reset": result.resetTime.toString(),
            "Retry-After": Math.ceil(
              (result.resetTime - Date.now()) / 1000
            ).toString(),
          },
        }
      );
    }

    // Add rate limit headers to response
    // Note: In Next.js, we can't modify response headers in middleware easily
    // This is more useful for API routes
    return null; // Continue processing
  };
}
