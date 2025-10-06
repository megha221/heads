-- Create database and table for LEE registrations
-- Run this in MySQL: mysql -u root -p < create_lee_table.sql

CREATE DATABASE IF NOT EXISTS conference_db;
USE conference_db;

CREATE TABLE IF NOT EXISTS lee_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT NOT NULL,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes for better performance
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
);

-- Verify table creation
SELECT 'LEE registrations table created successfully!' as status;
DESCRIBE lee_registrations;
