-- Migration: extend waitlist table to support movrr-website-new form
-- Run once in Supabase SQL editor AFTER 20260426000000 from movrr-waitlist.
--
-- Design notes:
--   movrr-waitlist (legacy):   city required, bike_ownership ("yes"|"no"|"planning"), no audience
--   movrr-website-new (new):   city required, audience required, bike_ownership ("own"|"interested"|"planning")
--   Both forms share this table — new columns are nullable for backward compat with legacy rows.
--   city intentionally stays NOT NULL — MOVRR is a city-by-city product; city is primary acquisition signal.
--   Both forms now use bike_ownership. Legacy values "yes"/"no" are backfilled to "own"/"interested".

-- 1. Backfill legacy bike_ownership values before updating the constraint
UPDATE public.waitlist SET bike_ownership = 'own'        WHERE bike_ownership = 'yes';
UPDATE public.waitlist SET bike_ownership = 'interested' WHERE bike_ownership = 'no';

-- 2. Update bike_ownership constraint: allow NULL and adopt new value set
ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_bike_ownership_check;
ALTER TABLE public.waitlist ALTER COLUMN bike_ownership DROP NOT NULL;
ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_bike_ownership_check
  CHECK (bike_ownership IS NULL OR bike_ownership = ANY (ARRAY['own'::text, 'interested'::text, 'planning'::text]));

-- 3. Add audience and source columns for movrr-website-new
ALTER TABLE public.waitlist
  ADD COLUMN IF NOT EXISTS audience text
    CHECK (audience IS NULL OR audience = ANY (ARRAY['rider'::text, 'brand'::text, 'partner'::text])),
  ADD COLUMN IF NOT EXISTS source   text;  -- 'movrr_website' | 'movrr_waitlist' | NULL (pre-migration rows)

-- 4. Backfill source on all pre-existing rows
UPDATE public.waitlist SET source = 'movrr_waitlist' WHERE source IS NULL;
