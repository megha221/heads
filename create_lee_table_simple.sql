-- Create LEE registrations table in the existing database
-- Run this in your MySQL client (phpMyAdmin, MySQL Workbench, or command line)

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
