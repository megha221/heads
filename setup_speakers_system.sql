-- Complete setup script for the speakers system
-- This script adds speaker bio fields and populates sample data

USE conference_db;

-- Step 1: Add speaker bio fields to events table
ALTER TABLE events 
ADD COLUMN IF NOT EXISTS speaker_bio TEXT NULL,
ADD COLUMN IF NOT EXISTS speaker_photo VARCHAR(500) NULL,
ADD COLUMN IF NOT EXISTS speaker_affiliation VARCHAR(200) NULL,
ADD COLUMN IF NOT EXISTS speaker_title VARCHAR(100) NULL,
ADD COLUMN IF NOT EXISTS speaker_google_scholar VARCHAR(500) NULL,
ADD COLUMN IF NOT EXISTS speaker_linkedin VARCHAR(500) NULL,
ADD COLUMN IF NOT EXISTS speaker_twitter VARCHAR(500) NULL,
ADD COLUMN IF NOT EXISTS speaker_website VARCHAR(500) NULL;

-- Step 2: Update existing speakers with comprehensive bio information

-- Prof Pratima Murthy
UPDATE events 
SET 
  speaker_bio = 'Professor and Head of Department of Psychiatry, NIMHANS. Leading expert in mental health research with over 25 years of experience in clinical psychiatry and research. Her work focuses on integrating AI technologies in mental healthcare while maintaining ethical standards.',
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
  speaker_bio = 'Professor at IIT Kharagpur, specializing in Natural Language Processing and AI Ethics. Published over 100 papers in top-tier conferences and journals. Expert in multilingual AI systems and responsible AI development.',
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
  speaker_bio = 'Legal expert specializing in AI law and data protection. PhD in Law with focus on GDPR and digital rights. Consultant for multiple AI ethics initiatives and data governance frameworks.',
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
  speaker_bio = 'Principal Researcher at Microsoft Research India. Expert in multilingual NLP and AI ethics. Leading researcher in responsible AI development and cultural adaptation of AI systems.',
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
  speaker_bio = 'Senior Research Scientist at Microsoft Research India. Specializes in multilingual AI systems and fairness in machine learning. Expert in evaluating AI models for bias and cultural sensitivity.',
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
  speaker_bio = 'Professor of Psychiatry at NIMHANS with expertise in women\'s mental health and AI applications in clinical practice. Leading researcher in gender-sensitive AI systems for mental healthcare.',
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
  speaker_bio = 'Assistant Professor at NIMHANS, specializing in computational psychiatry and AI applications in mental health diagnosis. Expert in developing AI tools for clinical decision support.',
  speaker_photo = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'NIMHANS, Bengaluru',
  speaker_title = 'Assistant Professor',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=sachin_baliga',
  speaker_linkedin = 'https://linkedin.com/in/sachin-baliga',
  speaker_website = 'https://nimhans.ac.in'
WHERE speaker LIKE '%Sachin%';

-- Prof Sanjeev Jain
UPDATE events 
SET 
  speaker_bio = 'Professor of Psychiatry at NIMHANS with extensive research in cultural psychiatry and AI applications. Expert in understanding cultural variations in mental health expression.',
  speaker_photo = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'NIMHANS, Bengaluru',
  speaker_title = 'Professor of Psychiatry',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=sanjeev_jain',
  speaker_linkedin = 'https://linkedin.com/in/sanjeev-jain',
  speaker_website = 'https://nimhans.ac.in'
WHERE speaker LIKE '%Sanjeev Jain%';

-- Dr Somnath Banerjee
UPDATE events 
SET 
  speaker_bio = 'Research Scientist specializing in multimodal AI systems and cultural alignment. Expert in developing AI models that work across different languages and cultural contexts.',
  speaker_photo = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'Research Institute',
  speaker_title = 'Research Scientist',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=somnath_banerjee',
  speaker_linkedin = 'https://linkedin.com/in/somnath-banerjee',
  speaker_website = 'https://research-institute.com'
WHERE speaker LIKE '%Somnath Banerjee%';

-- Dr Rima Hazra
UPDATE events 
SET 
  speaker_bio = 'AI Research Scientist with expertise in post-training alignment of large language models. Specializes in cultural adaptation and safety measures for AI systems.',
  speaker_photo = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'AI Research Lab',
  speaker_title = 'Research Scientist',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=rima_hazra',
  speaker_linkedin = 'https://linkedin.com/in/rima-hazra',
  speaker_website = 'https://ai-research-lab.com'
WHERE speaker LIKE '%Rima Hazra%';

-- Dr Aseem Srivastava
UPDATE events 
SET 
  speaker_bio = 'AI Safety Researcher with expertise in alignment and security. Expert in identifying and mitigating AI safety risks, particularly in healthcare applications.',
  speaker_photo = 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'AI Safety Institute',
  speaker_title = 'Senior Research Scientist',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=aseem_srivastava',
  speaker_linkedin = 'https://linkedin.com/in/aseem-srivastava',
  speaker_website = 'https://ai-safety-institute.com'
WHERE speaker LIKE '%Aseem Srivastava%';

-- Mr Vamshi Bonagiri
UPDATE events 
SET 
  speaker_bio = 'AI Security Expert specializing in adversarial attacks and defense mechanisms. Expert in identifying vulnerabilities in AI systems and developing robust solutions.',
  speaker_photo = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'Cybersecurity Research Lab',
  speaker_title = 'Security Researcher',
  speaker_google_scholar = 'https://scholar.google.com/citations?user=vamshi_bonagiri',
  speaker_linkedin = 'https://linkedin.com/in/vamshi-bonagiri',
  speaker_website = 'https://cybersecurity-lab.com'
WHERE speaker LIKE '%Vamshi Bonagiri%';

-- Mr Bobby Kunhu
UPDATE events 
SET 
  speaker_bio = 'Lived experience expert and mental health advocate. Provides crucial perspective on the real-world impact of AI systems in mental healthcare from a user perspective.',
  speaker_photo = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  speaker_affiliation = 'Mental Health Advocacy Group',
  speaker_title = 'Lived Experience Expert',
  speaker_linkedin = 'https://linkedin.com/in/bobby-kunhu',
  speaker_website = 'https://mental-health-advocacy.com'
WHERE speaker LIKE '%Bobby Kunhu%';

-- Step 3: Verify the setup
SELECT 
  speaker,
  speaker_title,
  speaker_affiliation,
  CASE 
    WHEN speaker_bio IS NOT NULL THEN 'Bio Available'
    ELSE 'No Bio'
  END as bio_status,
  CASE 
    WHEN speaker_photo IS NOT NULL THEN 'Photo Available'
    ELSE 'No Photo'
  END as photo_status
FROM events 
WHERE speaker IS NOT NULL 
  AND speaker != '' 
  AND speaker != 'HEADS Research Team'
  AND speaker != 'HEADS Team and invited experts'
  AND speaker != 'All participants'
ORDER BY speaker;

-- Step 4: Show summary
SELECT 
  COUNT(DISTINCT speaker) as total_speakers,
  COUNT(CASE WHEN speaker_bio IS NOT NULL THEN 1 END) as speakers_with_bio,
  COUNT(CASE WHEN speaker_photo IS NOT NULL THEN 1 END) as speakers_with_photo,
  COUNT(CASE WHEN speaker_google_scholar IS NOT NULL THEN 1 END) as speakers_with_scholar,
  COUNT(CASE WHEN speaker_linkedin IS NOT NULL THEN 1 END) as speakers_with_linkedin
FROM events 
WHERE speaker IS NOT NULL 
  AND speaker != '' 
  AND speaker != 'HEADS Research Team'
  AND speaker != 'HEADS Team and invited experts'
  AND speaker != 'All participants';
