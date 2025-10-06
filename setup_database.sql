-- MySQL Database Setup Script
-- Run this script in your MySQL client

-- Connect to MySQL
-- mysql -u root -p
-- Enter password: rootuser

-- Create database
CREATE DATABASE IF NOT EXISTS conference_db;
USE conference_db;

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS announcements;
DROP TABLE IF EXISTS blogs;

-- Create announcements table
CREATE TABLE announcements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(500),
  category VARCHAR(50) DEFAULT 'General',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create blogs table
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample announcements
INSERT INTO announcements (title, description, image, category) VALUES 
('Workshop Registration Open', 'Registration for our hands-on workshops is now open. Limited seats available! Join us for intensive sessions on cutting-edge networking technologies.', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&crop=center', 'Workshop'),
('Keynote Speaker Announcement', 'We are excited to announce Dr. Sarah Johnson as our keynote speaker for DCNet 2025. Dr. Johnson will present on "The Future of Quantum Networking".', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center', 'Speaker'),
('Call for Papers Extended', 'The deadline for paper submissions has been extended to March 15th, 2025. Submit your research on data communication and networking innovations.', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center', 'General'),
('Venue Information', 'The conference will be held at the San Francisco Convention Center. Detailed venue information and directions will be provided soon.', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center', 'Venue');

-- Insert sample blogs
INSERT INTO blogs (title, content) VALUES 
('Welcome to DCNet 2025', 'We are thrilled to welcome you to the premier conference on Data Communication and Networking. This year promises to be our biggest event yet with cutting-edge research presentations, hands-on workshops, and networking opportunities.'),
('Networking Best Practices', 'Effective networking is crucial for career growth in the tech industry. Here are some tips to make the most of your conference experience: 1) Prepare your elevator pitch, 2) Bring plenty of business cards, 3) Attend social events, 4) Follow up with new connections.'),
('Future of Data Communication', 'The landscape of data communication is rapidly evolving with the advent of 5G, edge computing, and quantum networking. This blog explores the emerging trends and technologies that will shape the future of our field.');

-- Verify the data
SELECT 'Announcements:' as Table_Name;
SELECT id, title, category, created_at FROM announcements;

SELECT 'Blogs:' as Table_Name;
SELECT id, title, created_at FROM blogs;

-- Show success message
SELECT 'Database setup completed successfully!' as Status;
