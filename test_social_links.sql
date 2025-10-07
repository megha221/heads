-- Test script to verify social links functionality
-- Run this after applying the migration

USE heads_db;

-- Check if the new columns exist
DESCRIBE announcements;

-- Insert a test announcement with social links
INSERT INTO announcements (title, description, image, category, google_scholar_url, linkedin_url, youtube_url) 
VALUES (
  'Test Announcement with Social Links', 
  'This is a test announcement to verify that social media links are working correctly.', 
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&crop=center', 
  'Test',
  'https://scholar.google.com/citations?user=test123',
  'https://linkedin.com/in/test-user',
  'https://youtube.com/watch?v=test123'
);

-- Verify the data was inserted correctly
SELECT id, title, google_scholar_url, linkedin_url, youtube_url FROM announcements WHERE title = 'Test Announcement with Social Links';

-- Clean up test data (optional)
-- DELETE FROM announcements WHERE title = 'Test Announcement with Social Links';
