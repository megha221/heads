-- Add speaker bio fields to events table
-- This will support detailed speaker information for 10-14 speakers

USE conference_db;

-- Add new columns for speaker information
ALTER TABLE events 
ADD COLUMN speaker_bio TEXT NULL,
ADD COLUMN speaker_photo VARCHAR(500) NULL,
ADD COLUMN speaker_affiliation VARCHAR(200) NULL,
ADD COLUMN speaker_title VARCHAR(100) NULL,
ADD COLUMN speaker_google_scholar VARCHAR(500) NULL,
ADD COLUMN speaker_linkedin VARCHAR(500) NULL,
ADD COLUMN speaker_twitter VARCHAR(500) NULL,
ADD COLUMN speaker_website VARCHAR(500) NULL;

-- Update existing events with sample speaker information
-- You can modify these with actual speaker details

-- Prof Pratima Murthy
UPDATE events 
SET 
  speaker_bio = 'Professor and Head of Department of Psychiatry, NIMHANS. Leading expert in mental health research with over 25 years of experience in clinical psychiatry and research.',
  speaker_photo = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'NIMHANS, Bengaluru',
  speaker_title = 'Professor and Head of Department of Psychiatry',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=pratima_murthy',
  speaker_linkedin = 'https://linkedin.com/in/pratima-murthy',
  speaker_website = 'https://nimhans.ac.in'
WHERE speaker LIKE '%Pratima Murthy%';

-- Prof Animesh Mukherjee
UPDATE events 
SET 
  speaker_bio = 'Professor at IIT Kharagpur, specializing in Natural Language Processing and AI Ethics. Published over 100 papers in top-tier conferences and journals.',
  speaker_photo = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'IIT Kharagpur',
  speaker_title = 'Professor, Department of Computer Science',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=animesh_mukherjee',
  speaker_linkedin = 'https://linkedin.com/in/animesh-mukherjee',
  speaker_website = 'https://cse.iitkgp.ac.in'
WHERE speaker LIKE '%Animesh Mukherjee%';

-- Dr Abhisek Dash
UPDATE events 
SET 
  speaker_bio = 'Legal expert specializing in AI law and data protection. PhD in Law with focus on GDPR and digital rights. Consultant for multiple AI ethics initiatives.',
  speaker_photo = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'Independent Legal Consultant',
  speaker_title = 'AI Law Specialist',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=abhisek_dash',
  speaker_linkedin = 'https://linkedin.com/in/abhisek-dash',
  speaker_website = 'https://ai-law-consultant.com'
WHERE speaker LIKE '%Abhisek Dash%';

-- Dr Monojit Choudhury
UPDATE events 
SET 
  speaker_bio = 'Principal Researcher at Microsoft Research India. Expert in multilingual NLP and AI ethics. Leading researcher in responsible AI development.',
  speaker_photo = 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'Microsoft Research India',
  speaker_title = 'Principal Researcher',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=monojit_choudhury',
  speaker_linkedin = 'https://linkedin.com/in/monojit-choudhury',
  speaker_website = 'https://microsoft.com/research'
WHERE speaker LIKE '%Monojit Choudhury%';

-- Dr Sunayana Sitaram
UPDATE events 
SET 
  speaker_bio = 'Senior Research Scientist at Microsoft Research India. Specializes in multilingual AI systems and fairness in machine learning.',
  speaker_photo = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'Microsoft Research India',
  speaker_title = 'Senior Research Scientist',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=sunayana_sitaram',
  speaker_linkedin = 'https://linkedin.com/in/sunayana-sitaram',
  speaker_website = 'https://microsoft.com/research'
WHERE speaker LIKE '%Sunayana%';

-- Prof Prabha Chandra
UPDATE events 
SET 
  speaker_bio = 'Professor of Psychiatry at NIMHANS with expertise in women\'s mental health and AI applications in clinical practice.',
  speaker_photo = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'NIMHANS, Bengaluru',
  speaker_title = 'Professor of Psychiatry',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=prabha_chandra',
  speaker_linkedin = 'https://linkedin.com/in/prabha-chandra',
  speaker_website = 'https://nimhans.ac.in'
WHERE speaker LIKE '%Prabha Chandra%';

-- Dr Sachin Baliga
UPDATE events 
SET 
  speaker_bio = 'Assistant Professor at NIMHANS, specializing in computational psychiatry and AI applications in mental health diagnosis.',
  speaker_photo = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'NIMHANS, Bengaluru',
  speaker_title = 'Assistant Professor',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=sachin_baliga',
  speaker_linkedin = 'https://linkedin.com/in/sachin-baliga',
  speaker_website = 'https://nimhans.ac.in'
WHERE speaker LIKE '%Sachin%';

-- Verify the changes
SELECT speaker, speaker_title, speaker_affiliation, speaker_bio FROM events WHERE speaker IS NOT NULL AND speaker != '';
