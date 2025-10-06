-- Create events table for workshop schedule
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day_number ENUM('day1', 'day2') NOT NULL,
    time_slot VARCHAR(50) NOT NULL,
    duration VARCHAR(20) NOT NULL,
    type VARCHAR(50) NOT NULL,
    category VARCHAR(100),
    title VARCHAR(500) NOT NULL,
    speaker VARCHAR(200),
    location VARCHAR(100),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample events for Day 1
INSERT INTO events (day_number, time_slot, duration, type, category, title, speaker, location, description) VALUES
('day1', '09:00 AM - 10:00 AM', '60 minutes', 'Introduction', NULL, 'The need for Multilingual LLMs and Ethical, Responsible use of AI in Mental Health', '', '', ''),
('day1', '10:00 AM - 11:30 AM', '90 minutes', 'Workshop', 'Data Privacy, Security and Confidentiality', 'Personally Identifying Information (PII) removal and reidentification: Empirical testing', 'Dr Animesh Mukherjee', 'India', '30 minutes - presentation, 10 minutes - current protocol PII plan presented by PS/ LS/ DM, 10 minutes - demo of workflow with sample interview transcript, 10 minutes - discuss modifications required in protocol or workflow, 20 minutes - team discussion about flow for voice morphing and fingerprinting'),
('day1', '11:30 AM - 11:45 AM', '15 minutes', 'Break', NULL, '', '', '', ''),
('day1', '11:45 AM - 12:45 PM', '60 minutes', 'Workshop', 'Data Privacy, Security and Confidentiality', 'Research team as a data fiduciary and laws relating to Digital Personal Data Protection (DPDP) act and GDPR', 'Dr Abhisek Dash', 'Germany', '30 minutes - presentation, 20 minutes - case scenario discussions (Eg: maintaining logs for chain of custody, deletion requests from participants), 10 minutes - current protocol plan and modifications required for alignment with relevant laws'),
('day1', '12:45 PM - 01:30 PM', '45 minutes', 'Lunch Break', NULL, '', '', '', ''),
('day1', '01:30 PM - 03:00 PM', '90 minutes', 'Panel Discussion', 'Data Sovereignty and Sharing', 'Sharing data with the world which includes large commercial monopolies and a colonial data governance model', 'Dr Animesh Mukherjee, Dr Abhisek Dash, Dr Pratima Murthy, Lived experience expert', 'Germany', 'Panel - AI ethics expert, AI law expert, clinician researcher expert, lived experience expert'),
('day1', '03:00 PM - 03:15 PM', '15 minutes', 'Break', NULL, '', '', '', ''),
('day1', '03:15 PM - 04:15 PM', '60 minutes', 'Workshop', 'Data Sovereignty and Sharing', 'Data sovereignty, terms and conditions of data sharing, and their enforcement', 'Dr Abhisek Dash', 'Germany', ''),
('day1', '04:30 PM - 06:30 PM', '120 minutes', 'Co-design Session', NULL, '', '', '', '');

-- Insert sample events for Day 2
INSERT INTO events (day_number, time_slot, duration, type, category, title, speaker, location, description) VALUES
('day2', '09:00 AM - 10:30 AM', '90 minutes', 'Workshop', 'AI Ethics and Bias', 'Detecting and mitigating bias in AI models for mental health', 'Dr Sarah Johnson', 'USA', '45 minutes - presentation on bias detection methods, 30 minutes - hands-on workshop with sample models, 15 minutes - Q&A'),
('day2', '10:30 AM - 10:45 AM', '15 minutes', 'Break', NULL, '', '', '', ''),
('day2', '10:45 AM - 12:15 PM', '90 minutes', 'Workshop', 'Implementation Strategies', 'Deploying AI systems in clinical settings: Challenges and solutions', 'Dr Michael Chen', 'Canada', '30 minutes - presentation, 30 minutes - case studies, 30 minutes - group discussion on implementation challenges'),
('day2', '12:15 PM - 01:00 PM', '45 minutes', 'Lunch Break', NULL, '', '', '', ''),
('day2', '01:00 PM - 02:30 PM', '90 minutes', 'Panel Discussion', 'Future Directions', 'The future of AI in mental health: Opportunities and challenges', 'Dr Sarah Johnson, Dr Michael Chen, Dr Lisa Wang, Lived experience expert', 'USA', 'Panel discussion with AI researchers, clinicians, and lived experience experts'),
('day2', '02:30 PM - 02:45 PM', '15 minutes', 'Break', NULL, '', '', '', ''),
('day2', '02:45 PM - 04:15 PM', '90 minutes', 'Workshop', 'Practical Implementation', 'Building ethical AI workflows: From design to deployment', 'Dr Lisa Wang', 'Australia', '30 minutes - framework presentation, 45 minutes - group work on ethical workflows, 15 minutes - presentation of group work'),
('day2', '04:15 PM - 06:00 PM', '105 minutes', 'Co-design Session', 'Final Integration', 'Integrating all learnings: Creating comprehensive ethical AI guidelines', 'All participants', 'Global', 'Collaborative session to create final guidelines and recommendations');
