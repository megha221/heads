-- Update events table to support 3 days
ALTER TABLE events MODIFY COLUMN day_number ENUM('day1', 'day2', 'day3') NOT NULL;

-- Clear existing events
DELETE FROM events;

-- Insert new event data for "Responsible AI for Psychiatry in India" workshop
-- Day 1: Friday, 17th October - Data Privacy, Security, Governance and Sovereignty
INSERT INTO events (day_number, time_slot, duration, type, category, title, speaker, location, description) VALUES
('day1', '09:30 AM - 10:10 AM', '40 minutes', 'Keynote', 'Data Privacy, Security, Governance and Sovereignty', 'Mind, Machine and a Billion Voices: Charting a Responsible Course for AI in Indian Mental Healthcare', 'Prof Pratima Murthy', 'NIMHANS Campus, Bengaluru', 'Opening keynote addressing the responsible use of AI in Indian mental healthcare'),
('day1', '10:15 AM - 11:40 AM', '85 minutes', 'Workshop', 'Data Privacy, Security, Governance and Sovereignty', 'How Anonymous is "Anonymous"? Testing the Limits of Clinical Data Deidentification in India', 'Prof Animesh Mukherjee', 'NIMHANS Campus, Bengaluru', 'Workshop on data deidentification challenges in clinical research'),
('day1', '11:45 AM - 12:45 PM', '60 minutes', 'Presentation', 'Data Privacy, Security, Governance and Sovereignty', 'GDPR and Rights of Data Subjects – Special Focus on AI research in Mental Healthcare', 'Dr Abhisek Dash', 'NIMHANS Campus, Bengaluru', 'Legal framework discussion on data protection in AI mental health research'),
('day1', '12:45 PM - 01:30 PM', '45 minutes', 'Break', 'Lunch Break', 'Lunch Break', '', 'NIMHANS Campus, Bengaluru', ''),
('day1', '01:30 PM - 03:00 PM', '90 minutes', 'Panel Discussion', 'Data Privacy, Security, Governance and Sovereignty', 'Our Data, Their Models: Whose Benefit? A Panel on Justice in AI for Mental Health', 'Prof Pratima M., Prof Animesh M., Dr Abhisek D., Mr Bobby Kunhu', 'NIMHANS Campus, Bengaluru', 'Panel discussion on data justice and AI benefits in mental health'),
('day1', '03:00 PM - 03:15 PM', '15 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''),
('day1', '03:15 PM - 04:45 PM', '90 minutes', 'Co-design Session', 'Data Privacy, Security, Governance and Sovereignty', 'Co-design session', 'HEADS Research Team', 'NIMHANS Campus, Bengaluru', 'Onsite only co-design session with HEADS research team');

-- Day 2: Saturday, 18th October - Methodological Anglocentrism & Cultural Loss
INSERT INTO events (day_number, time_slot, duration, type, category, title, speaker, location, description) VALUES
('day2', '09:00 AM - 10:25 AM', '85 minutes', 'Co-design Session', 'Methodological Anglocentrism & Cultural Loss', 'Co-design session', 'HEADS Research Team', 'NIMHANS Campus, Bengaluru', 'Onsite only co-design session with HEADS research team'),
('day2', '10:30 AM - 11:30 AM', '60 minutes', 'Presentation', 'Methodological Anglocentrism & Cultural Loss', 'Cultural Variations in the expression of distress and implications for language-based diagnosis of depression', 'Prof Sanjeev Jain', 'NIMHANS Campus, Bengaluru', 'Exploring cultural variations in distress expression and their impact on AI diagnosis'),
('day2', '11:30 AM - 11:45 AM', '15 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''),
('day2', '11:45 AM - 12:45 PM', '60 minutes', 'Presentation', 'Methodological Anglocentrism & Cultural Loss', 'Multicultural, multilingual and multimodal alignment of AI Models', 'Dr Somnath Banerjee', 'NIMHANS Campus, Bengaluru', 'Technical approaches to aligning AI models across cultures and languages'),
('day2', '12:45 PM - 01:30 PM', '45 minutes', 'Break', 'Lunch Break', 'Lunch Break', '', 'NIMHANS Campus, Bengaluru', ''),
('day2', '01:30 PM - 02:30 PM', '60 minutes', 'Presentation', 'Methodological Anglocentrism & Cultural Loss', 'Anglocentrism inherent to classificatory systems - fait accompli or need to revise?', 'Prof Sanjeev Jain', 'NIMHANS Campus, Bengaluru', 'Critical examination of anglocentrism in classification systems'),
('day2', '02:35 PM - 03:45 PM', '70 minutes', 'Panel Discussion', 'Methodological Anglocentrism & Cultural Loss', 'Multilingual and code-mixing influences in expression of distress', 'Prof Sanjeev J., Prof Animesh M., Dr Sachin Barbde', 'NIMHANS Campus, Bengaluru', 'Panel discussion on multilingual and code-mixing in distress expression'),
('day2', '03:45 PM - 04:30 PM', '45 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''),
('day2', '04:30 PM - 05:30 PM', '60 minutes', 'Presentation', 'Methodological Anglocentrism & Cultural Loss', 'Techniques for post-training alignment of LLMs – focus on culture', 'Dr Rima Hazra', 'NIMHANS Campus, Bengaluru', 'Technical session on cultural alignment of large language models');

-- Day 3: Sunday, 19th October - Representation, Fairness & Safety
INSERT INTO events (day_number, time_slot, duration, type, category, title, speaker, location, description) VALUES
('day3', '09:00 AM - 09:55 AM', '55 minutes', 'Presentation', 'Representation, Fairness & Safety', 'Evaluating multilingual and multi-cultural models for accuracy and bias', 'Dr Sunayana Sitaram', 'NIMHANS Campus, Bengaluru', 'Evaluation methods for multilingual and multicultural AI models'),
('day3', '10:00 AM - 11:30 AM', '90 minutes', 'Workshop', 'Representation, Fairness & Safety', 'AI Safety, Alignment and Jailbreaks', 'Dr Aseem Srivastava & Mr Vamshi Bonagiri', 'NIMHANS Campus, Bengaluru', 'Workshop on AI safety, alignment, and security vulnerabilities'),
('day3', '11:30 AM - 11:45 AM', '15 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''),
('day3', '11:45 AM - 12:45 PM', '60 minutes', 'Presentation', 'Representation, Fairness & Safety', 'Ethical concerns of AI Therapists and Patient Simulations', 'Dr Monojit Choudhury', 'NIMHANS Campus, Bengaluru', 'Ethical considerations in AI-based therapeutic applications'),
('day3', '12:45 PM - 01:30 PM', '45 minutes', 'Break', 'Lunch Break', 'Lunch Break', '', 'NIMHANS Campus, Bengaluru', ''),
('day3', '01:30 PM - 03:00 PM', '90 minutes', 'Panel Discussion', 'Representation, Fairness & Safety', 'Beyond technical measures of accuracy: Involving communities in evaluation of AI solutions', 'Dr Sunayana S., Dr Monojit C., Prof Prabha Chandra, Dr Sachin B.', 'NIMHANS Campus, Bengaluru', 'Panel on community involvement in AI evaluation beyond technical metrics'),
('day3', '03:00 PM - 03:15 PM', '15 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''),
('day3', '03:15 PM - 04:45 PM', '90 minutes', 'Co-design Session', 'Representation, Fairness & Safety', 'Deployment of HEADS as an assistant to non-psychiatrists – intended and unintended consequences', 'HEADS Team and invited experts', 'NIMHANS Campus, Bengaluru', 'Onsite only session on HEADS deployment implications');
