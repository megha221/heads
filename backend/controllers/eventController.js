import { db } from '../db/connection.js';

// Get all events
export const getEvents = (req, res) => {
  db.query(
    `SELECT * FROM events 
     ORDER BY 
       day_number,
       STR_TO_DATE(SUBSTRING(time_slot, 1, 8), '%h:%i %p')`,
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send(err);
      }
      console.log(`Found ${results.length} events`);
      res.json(results);
    }
  );
};

// Get events by day
export const getEventsByDay = (req, res) => {
  const { day } = req.params;
  
  if (!['day1', 'day2', 'day3'].includes(day)) {
    return res.status(400).json({ message: "Invalid day parameter. Use 'day1', 'day2', or 'day3'" });
  }

  db.query(
    `SELECT * FROM events 
     WHERE day_number = ? 
     ORDER BY STR_TO_DATE(SUBSTRING(time_slot, 1, 8), '%h:%i %p')`,
    [day],
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send(err);
      }
      console.log(`Found ${results.length} events for ${day}`);
      res.json(results);
    }
  );
};

// Get single event by ID
export const getEventById = (req, res) => {
  const { id } = req.params;
  
  db.query(
    "SELECT * FROM events WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send(err);
      }
      
      if (results.length === 0) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(results[0]);
    }
  );
};

// Create new event
export const createEvent = (req, res) => {
  const { 
    day_number, time_slot, duration, type, category, title, speaker, location, description,
    speaker_bio, speaker_photo, speaker_affiliation, speaker_title,
    speaker_google_scholar, speaker_linkedin, speaker_twitter, speaker_website
  } = req.body;

  if (!day_number || !time_slot || !duration || !type || !title) {
    return res.status(400).json({ message: "Day number, time slot, duration, type, and title are required" });
  }

  db.query(
    `INSERT INTO events (
      day_number, time_slot, duration, type, category, title, speaker, location, description,
      speaker_bio, speaker_photo, speaker_affiliation, speaker_title,
      speaker_google_scholar, speaker_linkedin, speaker_twitter, speaker_website
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      day_number, time_slot, duration, type, category || null, title, speaker || null, location || null, description || null,
      speaker_bio || null, speaker_photo || null, speaker_affiliation || null, speaker_title || null,
      speaker_google_scholar || null, speaker_linkedin || null, speaker_twitter || null, speaker_website || null
    ],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send(err);
      }
      res.status(201).json({
        id: result.insertId,
        message: "Event created successfully"
      });
    }
  );
};

// Update event
export const updateEvent = (req, res) => {
  const { id } = req.params;
  const { 
    day_number, time_slot, duration, type, category, title, speaker, location, description,
    speaker_bio, speaker_photo, speaker_affiliation, speaker_title,
    speaker_google_scholar, speaker_linkedin, speaker_twitter, speaker_website
  } = req.body;

  db.query(
    `UPDATE events SET 
      day_number = ?, time_slot = ?, duration = ?, type = ?, category = ?, title = ?, speaker = ?, location = ?, description = ?,
      speaker_bio = ?, speaker_photo = ?, speaker_affiliation = ?, speaker_title = ?,
      speaker_google_scholar = ?, speaker_linkedin = ?, speaker_twitter = ?, speaker_website = ?
    WHERE id = ?`,
    [
      day_number, time_slot, duration, type, category || null, title, speaker || null, location || null, description || null,
      speaker_bio || null, speaker_photo || null, speaker_affiliation || null, speaker_title || null,
      speaker_google_scholar || null, speaker_linkedin || null, speaker_twitter || null, speaker_website || null,
      id
    ],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send(err);
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json({ message: "Event updated successfully" });
    }
  );
};

// Delete event
export const deleteEvent = (req, res) => {
  const { id } = req.params;
  
  db.query(
    "DELETE FROM events WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send(err);
      }
      
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json({ message: "Event deleted successfully" });
    }
  );
};

// Get unique speakers with their bio information
export const getSpeakers = (req, res) => {
  db.query(
    `SELECT DISTINCT 
      speaker,
      speaker_bio,
      speaker_photo,
      speaker_affiliation,
      speaker_title,
      speaker_google_scholar,
      speaker_linkedin,
      speaker_twitter,
      speaker_website
    FROM events 
    WHERE speaker IS NOT NULL 
      AND speaker != '' 
      AND speaker != 'HEADS Research Team'
      AND speaker != 'HEADS Team and invited experts'
      AND speaker != 'All participants'
    ORDER BY speaker`,
    (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send(err);
      }
      
      // Filter out duplicates and clean up the data
      const uniqueSpeakers = results.reduce((acc, current) => {
        const existingSpeaker = acc.find(speaker => speaker.speaker === current.speaker);
        if (!existingSpeaker) {
          acc.push(current);
        } else {
          // Merge bio information if one speaker has more complete data
          if (!existingSpeaker.speaker_bio && current.speaker_bio) {
            existingSpeaker.speaker_bio = current.speaker_bio;
          }
          if (!existingSpeaker.speaker_photo && current.speaker_photo) {
            existingSpeaker.speaker_photo = current.speaker_photo;
          }
          if (!existingSpeaker.speaker_affiliation && current.speaker_affiliation) {
            existingSpeaker.speaker_affiliation = current.speaker_affiliation;
          }
          if (!existingSpeaker.speaker_title && current.speaker_title) {
            existingSpeaker.speaker_title = current.speaker_title;
          }
          if (!existingSpeaker.speaker_google_scholar && current.speaker_google_scholar) {
            existingSpeaker.speaker_google_scholar = current.speaker_google_scholar;
          }
          if (!existingSpeaker.speaker_linkedin && current.speaker_linkedin) {
            existingSpeaker.speaker_linkedin = current.speaker_linkedin;
          }
          if (!existingSpeaker.speaker_twitter && current.speaker_twitter) {
            existingSpeaker.speaker_twitter = current.speaker_twitter;
          }
          if (!existingSpeaker.speaker_website && current.speaker_website) {
            existingSpeaker.speaker_website = current.speaker_website;
          }
        }
        return acc;
      }, []);
      
      console.log(`Found ${uniqueSpeakers.length} unique speakers`);
      res.json(uniqueSpeakers);
    }
  );
};

// Bulk insert new events (temporary endpoint for setup)
export const bulkInsertEvents = (req, res) => {
  // First, update the table structure to support day3
  db.query(
    "ALTER TABLE events MODIFY COLUMN day_number ENUM('day1', 'day2', 'day3') NOT NULL",
    (err, results) => {
      if (err) {
        console.error("Error updating table structure:", err);
        return res.status(500).send(err);
      }
      console.log("Table structure updated to support day3");
      
      // Clear existing events
      db.query("DELETE FROM events", (err, results) => {
        if (err) {
          console.error("Error clearing events:", err);
          return res.status(500).send(err);
        }
        console.log("Existing events cleared");
        
        // Insert new events
        const events = [
          // Day 1 events
          ['day1', '09:30 AM - 10:10 AM', '40 minutes', 'Keynote', 'Data Privacy, Security, Governance and Sovereignty', 'Mind, Machine and a Billion Voices: Charting a Responsible Course for AI in Indian Mental Healthcare', 'Prof Pratima Murthy', 'NIMHANS Campus, Bengaluru', 'Opening keynote addressing the responsible use of AI in Indian mental healthcare'],
          ['day1', '10:15 AM - 11:40 AM', '85 minutes', 'Workshop', 'Data Privacy, Security, Governance and Sovereignty', 'How Anonymous is "Anonymous"? Testing the Limits of Clinical Data Deidentification in India', 'Prof Animesh Mukherjee', 'NIMHANS Campus, Bengaluru', 'Workshop on data deidentification challenges in clinical research'],
          ['day1', '11:45 AM - 12:45 PM', '60 minutes', 'Presentation', 'Data Privacy, Security, Governance and Sovereignty', 'GDPR and Rights of Data Subjects – Special Focus on AI research in Mental Healthcare', 'Dr Abhisek Dash', 'NIMHANS Campus, Bengaluru', 'Legal framework discussion on data protection in AI mental health research'],
          ['day1', '12:45 PM - 01:30 PM', '45 minutes', 'Break', 'Lunch Break', 'Lunch Break', '', 'NIMHANS Campus, Bengaluru', ''],
          ['day1', '01:30 PM - 03:00 PM', '90 minutes', 'Panel Discussion', 'Data Privacy, Security, Governance and Sovereignty', 'Our Data, Their Models: Whose Benefit? A Panel on Justice in AI for Mental Health', 'Prof Pratima M., Prof Animesh M., Dr Abhisek D., Mr Bobby Kunhu', 'NIMHANS Campus, Bengaluru', 'Panel discussion on data justice and AI benefits in mental health'],
          ['day1', '03:00 PM - 03:15 PM', '15 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''],
          ['day1', '03:15 PM - 04:45 PM', '90 minutes', 'Co-design Session', 'Data Privacy, Security, Governance and Sovereignty', 'Co-design session', 'HEADS Research Team', 'NIMHANS Campus, Bengaluru', 'Onsite only co-design session with HEADS research team'],
          
          // Day 2 events
          ['day2', '09:00 AM - 10:25 AM', '85 minutes', 'Co-design Session', 'Methodological Anglocentrism & Cultural Loss', 'Co-design session', 'HEADS Research Team', 'NIMHANS Campus, Bengaluru', 'Onsite only co-design session with HEADS research team'],
          ['day2', '10:30 AM - 11:30 AM', '60 minutes', 'Presentation', 'Methodological Anglocentrism & Cultural Loss', 'Cultural Variations in the expression of distress and implications for language-based diagnosis of depression', 'Prof Sanjeev Jain', 'NIMHANS Campus, Bengaluru', 'Exploring cultural variations in distress expression and their impact on AI diagnosis'],
          ['day2', '11:30 AM - 11:45 AM', '15 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''],
          ['day2', '11:45 AM - 12:45 PM', '60 minutes', 'Presentation', 'Methodological Anglocentrism & Cultural Loss', 'Multicultural, multilingual and multimodal alignment of AI Models', 'Dr Somnath Banerjee', 'NIMHANS Campus, Bengaluru', 'Technical approaches to aligning AI models across cultures and languages'],
          ['day2', '12:45 PM - 01:30 PM', '45 minutes', 'Break', 'Lunch Break', 'Lunch Break', '', 'NIMHANS Campus, Bengaluru', ''],
          ['day2', '01:30 PM - 02:30 PM', '60 minutes', 'Presentation', 'Methodological Anglocentrism & Cultural Loss', 'Anglocentrism inherent to classificatory systems - fait accompli or need to revise?', 'Prof Sanjeev Jain', 'NIMHANS Campus, Bengaluru', 'Critical examination of anglocentrism in classification systems'],
          ['day2', '02:35 PM - 03:45 PM', '70 minutes', 'Panel Discussion', 'Methodological Anglocentrism & Cultural Loss', 'Multilingual and code-mixing influences in expression of distress', 'Prof Sanjeev J., Prof Animesh M., Dr Sachin Barbde', 'NIMHANS Campus, Bengaluru', 'Panel discussion on multilingual and code-mixing in distress expression'],
          ['day2', '03:45 PM - 04:30 PM', '45 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''],
          ['day2', '04:30 PM - 05:30 PM', '60 minutes', 'Presentation', 'Methodological Anglocentrism & Cultural Loss', 'Techniques for post-training alignment of LLMs – focus on culture', 'Dr Rima Hazra', 'NIMHANS Campus, Bengaluru', 'Technical session on cultural alignment of large language models'],
          
          // Day 3 events
          ['day3', '09:00 AM - 09:55 AM', '55 minutes', 'Presentation', 'Representation, Fairness & Safety', 'Evaluating multilingual and multi-cultural models for accuracy and bias', 'Dr Sunayana Sitaram', 'NIMHANS Campus, Bengaluru', 'Evaluation methods for multilingual and multicultural AI models'],
          ['day3', '10:00 AM - 11:30 AM', '90 minutes', 'Workshop', 'Representation, Fairness & Safety', 'AI Safety, Alignment and Jailbreaks', 'Dr Aseem Srivastava & Mr Vamshi Bonagiri', 'NIMHANS Campus, Bengaluru', 'Workshop on AI safety, alignment, and security vulnerabilities'],
          ['day3', '11:30 AM - 11:45 AM', '15 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''],
          ['day3', '11:45 AM - 12:45 PM', '60 minutes', 'Presentation', 'Representation, Fairness & Safety', 'Ethical concerns of AI Therapists and Patient Simulations', 'Dr Monojit Choudhury', 'NIMHANS Campus, Bengaluru', 'Ethical considerations in AI-based therapeutic applications'],
          ['day3', '12:45 PM - 01:30 PM', '45 minutes', 'Break', 'Lunch Break', 'Lunch Break', '', 'NIMHANS Campus, Bengaluru', ''],
          ['day3', '01:30 PM - 03:00 PM', '90 minutes', 'Panel Discussion', 'Representation, Fairness & Safety', 'Beyond technical measures of accuracy: Involving communities in evaluation of AI solutions', 'Dr Sunayana S., Dr Monojit C., Prof Prabha Chandra, Dr Sachin B.', 'NIMHANS Campus, Bengaluru', 'Panel on community involvement in AI evaluation beyond technical metrics'],
          ['day3', '03:00 PM - 03:15 PM', '15 minutes', 'Break', 'Break', 'Break', '', 'NIMHANS Campus, Bengaluru', ''],
          ['day3', '03:15 PM - 04:45 PM', '90 minutes', 'Co-design Session', 'Representation, Fairness & Safety', 'Deployment of HEADS as an assistant to non-psychiatrists – intended and unintended consequences', 'HEADS Team and invited experts', 'NIMHANS Campus, Bengaluru', 'Onsite only session on HEADS deployment implications']
        ];
        
        const insertQuery = "INSERT INTO events (day_number, time_slot, duration, type, category, title, speaker, location, description) VALUES ?";
        
        db.query(insertQuery, [events], (err, results) => {
          if (err) {
            console.error("Error inserting events:", err);
            return res.status(500).send(err);
          }
          console.log(`Successfully inserted ${results.affectedRows} events`);
          res.json({ message: `Successfully inserted ${results.affectedRows} events` });
        });
      });
    }
  );
};
