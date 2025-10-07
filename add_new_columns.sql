-- Add new columns to existing lee_registrations table
-- Run this in your MySQL client (phpMyAdmin, MySQL Workbench, or command line)

USE heads_db;

-- Add the new columns
ALTER TABLE lee_registrations 
ADD COLUMN gender VARCHAR(20) AFTER phone,
ADD COLUMN occupation VARCHAR(255) AFTER gender,
ADD COLUMN residence VARCHAR(255) AFTER occupation,
ADD COLUMN education VARCHAR(100) AFTER residence,
ADD COLUMN language VARCHAR(500) AFTER education;

-- Verify the table structure
DESCRIBE lee_registrations;
