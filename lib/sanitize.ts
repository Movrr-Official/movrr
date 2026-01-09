/**
 * Input sanitization utilities
 * Protects against XSS attacks by sanitizing user input
 */

/**
 * Sanitize HTML string to prevent XSS
 * Removes potentially dangerous HTML tags and attributes
 */
export function sanitizeHtml(html: string): string {
  if (typeof html !== "string") {
    return "";
  }

  // Remove script tags and their content
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  // Remove event handlers (onclick, onerror, etc.)
  sanitized = sanitized.replace(
    /\s*on\w+\s*=\s*["'][^"']*["']/gi,
    ""
  );
  sanitized = sanitized.replace(
    /\s*on\w+\s*=\s*[^\s>]*/gi,
    ""
  );

  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, "");

  // Remove data: URLs that could be dangerous
  sanitized = sanitized.replace(/data:text\/html/gi, "");

  return sanitized;
}

/**
 * Sanitize plain text input
 * Removes HTML tags and normalizes whitespace
 */
export function sanitizeText(text: string): string {
  if (typeof text !== "string") {
    return "";
  }

  // Remove HTML tags
  let sanitized = text.replace(/<[^>]*>/g, "");

  // Decode HTML entities
  sanitized = sanitized
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

  // Normalize whitespace
  sanitized = sanitized.replace(/\s+/g, " ").trim();

  return sanitized;
}

/**
 * Sanitize email address
 * Validates and sanitizes email input
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== "string") {
    return "";
  }

  // Remove whitespace and convert to lowercase
  const sanitized = email.trim().toLowerCase();

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitized)) {
    return "";
  }

  return sanitized;
}

/**
 * Sanitize URL
 * Validates and sanitizes URL input
 */
export function sanitizeUrl(url: string): string {
  if (typeof url !== "string") {
    return "";
  }

  const sanitized = url.trim();

  try {
    const parsed = new URL(sanitized);
    
    // Only allow http and https protocols
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return "";
    }

    return parsed.toString();
  } catch {
    return "";
  }
}

/**
 * Sanitize object recursively
 * Applies sanitization to all string values in an object
 */
export function sanitizeObject<T extends Record<string, unknown>>(
  obj: T,
  options: {
    sanitizeHtml?: boolean;
    allowedKeys?: string[];
  } = {}
): T {
  const { sanitizeHtml: useHtmlSanitization = false, allowedKeys } = options;
  const sanitized = { ...obj } as T;

  for (const key in sanitized) {
    if (allowedKeys && !allowedKeys.includes(key)) {
      delete sanitized[key];
      continue;
    }

    const value = sanitized[key];

    if (typeof value === "string") {
      (sanitized as Record<string, unknown>)[key] = useHtmlSanitization
        ? sanitizeHtml(value)
        : sanitizeText(value);
    } else if (value && typeof value === "object" && !Array.isArray(value)) {
      (sanitized as Record<string, unknown>)[key] = sanitizeObject(
        value as Record<string, unknown>,
        options
      );
    } else if (Array.isArray(value)) {
      (sanitized as Record<string, unknown>)[key] = value.map((item) =>
        typeof item === "string"
          ? useHtmlSanitization
            ? sanitizeHtml(item)
            : sanitizeText(item)
          : item
      );
    }
  }

  return sanitized;
}
