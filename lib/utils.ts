import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .trim(); // Trim - from start and end
};

export const deslugify = (text: string) => {
  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/My/g, "My");
};

export const formatDate = (dateString: string | Date): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const checkChanges = <T>(
  initialData: T | null,
  currentData: T
): Partial<T> => {
  if (!initialData) return currentData; // If no initial data, return current data

  const updatedFields: Partial<T> = {};

  for (const key in currentData) {
    if (currentData[key] !== initialData[key]) {
      updatedFields[key] = currentData[key];
    }
  }

  return updatedFields;
};

export const getFirstName = (fullName: string | undefined) => {
  if (!fullName) {
    return "";
  }
  const nameParts = fullName.trim().split(" ");
  return nameParts[0] || "";
};

export function calculateReadTime(content: string) {
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200; // Average reading speed
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute)); // Min 1 minute
}
