-- Update LEE registrations table to include new fields
-- Run this in your MySQL client to add the new columns

USE conference_db;

-- Add new columns to the existing table
ALTER TABLE lee_registrations 
ADD COLUMN IF NOT EXISTS gender VARCHAR(20) NOT NULL AFTER phone,
ADD COLUMN IF NOT EXISTS occupation VARCHAR(255) NOT NULL AFTER gender,
ADD COLUMN IF NOT EXISTS residence VARCHAR(255) NOT NULL AFTER occupation,
ADD COLUMN IF NOT EXISTS education VARCHAR(100) NOT NULL AFTER residence,
ADD COLUMN IF NOT EXISTS language VARCHAR(100) NOT NULL AFTER education;

-- Verify the updated table structure
DESCRIBE lee_registrations;

-- Show current data (if any)
SELECT * FROM lee_registrations;
