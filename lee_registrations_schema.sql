-- LEE Registrations Table
-- This table stores Lived Experience Expert (LEE) registration data

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

-- Insert some sample data (optional)
-- INSERT INTO lee_registrations (name, email, age, phone) VALUES
-- ('John Doe', 'john.doe@example.com', 35, '+91-9876543210'),
-- ('Jane Smith', 'jane.smith@example.com', 28, '+91-9876543211'),
-- ('Raj Kumar', 'raj.kumar@example.com', 42, '+91-9876543212');
