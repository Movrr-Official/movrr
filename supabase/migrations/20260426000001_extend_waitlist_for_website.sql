-- Migration: extend waitlist table to support movrr-website-new form
-- Run once in Supabase SQL editor (Database > SQL Editor > New query).
--
-- Context:
--   movrr-waitlist (legacy):  city required, bike_ownership ("yes"|"no"|"planning"), no audience
--   movrr-website-new (new):  city optional, audience required, bike_status ("own"|"interested"|"planning")
--   Both share this table — legacy rows get NULL for new columns; new rows get NULL for legacy columns.

-- 1. Make legacy NOT NULL columns nullable so the new form can omit them
ALTER TABLE public.waitlist ALTER COLUMN city DROP NOT NULL;

-- Drop the existing bike_ownership check so we can replace it with a nullable-aware version
ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_bike_ownership_check;
ALTER TABLE public.waitlist ALTER COLUMN bike_ownership DROP NOT NULL;
ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_bike_ownership_check
  CHECK (bike_ownership IS NULL OR bike_ownership = ANY (ARRAY['yes'::text, 'no'::text, 'planning'::text]));

-- 2. Add columns for the new form
ALTER TABLE public.waitlist
  ADD COLUMN IF NOT EXISTS audience   text CHECK (audience   IS NULL OR audience   = ANY (ARRAY['rider'::text, 'brand'::text, 'partner'::text])),
  ADD COLUMN IF NOT EXISTS bike_status text CHECK (bike_status IS NULL OR bike_status = ANY (ARRAY['own'::text, 'interested'::text, 'planning'::text])),
  ADD COLUMN IF NOT EXISTS source     text; -- 'movrr_website' | 'movrr_waitlist' | NULL (legacy)

-- 3. Backfill source for existing rows (optional — helps analytics distinguish form origin)
UPDATE public.waitlist SET source = 'movrr_waitlist' WHERE source IS NULL;
