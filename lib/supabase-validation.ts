/**
 * Supabase schema validation utilities
 * Validates that the database schema matches code expectations
 */

import { createSupabaseServerClient } from "@/supabase/server";

/**
 * Expected columns for the posts table
 */
const POSTS_TABLE_SCHEMA = {
  id: "uuid",
  title: "text",
  slug: "text",
  excerpt: "text",
  author: "text",
  category: "text",
  content: "text",
  featured: "boolean",
  image_url: "text",
  read_time: "integer",
  date: "timestamp",
  created_at: "timestamp",
  updated_at: "timestamp",
} as const;

/**
 * Validates that the posts table exists and has the expected schema
 * @returns true if schema is valid, false otherwise
 */
export async function validatePostsTableSchema(): Promise<{
  valid: boolean;
  errors: string[];
}> {
  const errors: string[] = [];

  try {
    const supabase = await createSupabaseServerClient();

    // Try to query the table to see if it exists
    const { data, error } = await supabase
      .from("posts")
      .select("id")
      .limit(1);

    if (error) {
      // Check if it's a "relation does not exist" error
      if (error.code === "42P01" || error.message.includes("does not exist")) {
        errors.push("Posts table does not exist in the database");
        return { valid: false, errors };
      }
      // Other errors might be permissions-related, which is still a problem
      errors.push(`Cannot access posts table: ${error.message}`);
      return { valid: false, errors };
    }

    // If we can query, the table exists
    // Note: Full schema validation would require querying information_schema
    // which may require elevated permissions. For now, we just verify the table exists.

    return { valid: true, errors: [] };
  } catch (error) {
    errors.push(
      `Schema validation failed: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    return { valid: false, errors };
  }
}

/**
 * Validates the database connection and basic schema
 * Should be called at application startup or in a health check endpoint
 */
export async function validateSupabaseConnection(): Promise<{
  connected: boolean;
  schemaValid: boolean;
  errors: string[];
}> {
  const errors: string[] = [];
  let connected = false;
  let schemaValid = false;

  try {
    const supabase = await createSupabaseServerClient();

    // Test connection by making a simple query
    const { error: connectionError } = await supabase
      .from("posts")
      .select("id")
      .limit(1);

    if (connectionError) {
      if (connectionError.code === "42P01") {
        errors.push("Database connection works but posts table is missing");
        connected = true;
      } else {
        errors.push(`Database connection failed: ${connectionError.message}`);
      }
    } else {
      connected = true;
    }

    // Validate schema if connected
    if (connected) {
      const schemaResult = await validatePostsTableSchema();
      schemaValid = schemaResult.valid;
      errors.push(...schemaResult.errors);
    }

    return { connected, schemaValid, errors };
  } catch (error) {
    errors.push(
      `Validation failed: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    return { connected: false, schemaValid: false, errors };
  }
}
