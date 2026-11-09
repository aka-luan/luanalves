-- Apply once with: pnpm exec node --env-file=.env.local scripts/setup-briefings.mjs
CREATE TABLE IF NOT EXISTS briefings (
  id uuid PRIMARY KEY,
  submission_key uuid UNIQUE NOT NULL,
  payload_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  data jsonb NOT NULL CHECK (data->>'schemaVersion' = '1.0')
);
CREATE TABLE IF NOT EXISTS briefing_rate_limits (
  fingerprint text PRIMARY KEY,
  window_start timestamptz NOT NULL,
  attempts integer NOT NULL
);
-- No client/browser database access; credentials are server-only.
REVOKE ALL ON briefings, briefing_rate_limits FROM PUBLIC;
