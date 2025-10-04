-- MySQL Database Schema for Conference Website
-- Run these commands in your MySQL client

CREATE DATABASE conference_db;

USE conference_db;

CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE announcements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO announcements (title, description) VALUES 
('Workshop Registration Open', 'Registration for our hands-on workshops is now open. Limited seats available!'),
('Keynote Speaker Announcement', 'We are excited to announce Dr. Sarah Johnson as our keynote speaker for DCNet 2025.'),
('Call for Papers Extended', 'The deadline for paper submissions has been extended to March 15th, 2025.');

INSERT INTO blogs (title, content) VALUES 
('Welcome to DCNet 2025', 'We are thrilled to welcome you to the premier conference on Data Communication and Networking. This year promises to be our biggest event yet with cutting-edge research presentations, hands-on workshops, and networking opportunities.'),
('Networking Best Practices', 'Effective networking is crucial for career growth in the tech industry. Here are some tips to make the most of your conference experience: 1) Prepare your elevator pitch, 2) Bring plenty of business cards, 3) Attend social events, 4) Follow up with new connections.'),
('Future of Data Communication', 'The landscape of data communication is rapidly evolving with the advent of 5G, edge computing, and quantum networking. This blog explores the emerging trends and technologies that will shape the future of our field.');
