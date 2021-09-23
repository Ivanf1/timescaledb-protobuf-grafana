CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;

-- this step will cause
-- ERROR: extension "timescaledb" has already been loaded with another version
-- when doing 'npx prisma migrate reset'
-- a workaround is to drop the database, create it again and then run 'npx prisma migrate dev'