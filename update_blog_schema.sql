-- Update the blogs table to support user submissions and approval workflow
USE conference_db;

-- Add new columns to the blogs table
ALTER TABLE blogs 
ADD COLUMN username VARCHAR(100) NOT NULL DEFAULT 'Anonymous',
ADD COLUMN image VARCHAR(500),
ADD COLUMN is_approved BOOLEAN DEFAULT FALSE,
ADD COLUMN submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- Update existing blogs to be approved by default
UPDATE blogs SET is_approved = TRUE WHERE id IN (1, 2, 3);

-- Insert some sample pending blog submissions
INSERT INTO blogs (title, content, username, image, is_approved) VALUES 
('The Future of AI in Networking', 'Artificial Intelligence is revolutionizing how we approach network optimization and security. This blog explores the latest trends and applications of AI in modern networking infrastructure.', 'tech_writer_2025', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center', FALSE),
('5G Security Challenges', 'As 5G networks become more widespread, new security challenges emerge. This post discusses the key security considerations for 5G implementation and best practices.', 'network_security_expert', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center', FALSE),
('Edge Computing Trends 2025', 'Edge computing is transforming how we process data closer to the source. Learn about the latest trends and technologies shaping the edge computing landscape.', 'edge_computing_guru', 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop&crop=center', FALSE);
