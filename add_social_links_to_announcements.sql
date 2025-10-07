-- Add social media links to announcements table
-- Run this script to add Google Scholar, LinkedIn, and YouTube fields

USE heads_db;

-- Add new columns for social media links
ALTER TABLE announcements 
ADD COLUMN google_scholar_url VARCHAR(500) NULL,
ADD COLUMN linkedin_url VARCHAR(500) NULL,
ADD COLUMN youtube_url VARCHAR(500) NULL;

-- Update existing announcements with sample social links (optional)
-- You can remove this section if you don't want sample data
UPDATE announcements 
SET 
  google_scholar_url = 'https://scholar.google.com/citations?user=example',
  linkedin_url = 'https://linkedin.com/in/example',
  youtube_url = 'https://youtube.com/watch?v=example'
WHERE id = 1;

-- Verify the changes
DESCRIBE announcements;
