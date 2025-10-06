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
  
  if (!['day1', 'day2'].includes(day)) {
    return res.status(400).json({ message: "Invalid day parameter. Use 'day1' or 'day2'" });
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
  const { day_number, time_slot, duration, type, category, title, speaker, location, description } = req.body;

  if (!day_number || !time_slot || !duration || !type || !title) {
    return res.status(400).json({ message: "Day number, time slot, duration, type, and title are required" });
  }

  db.query(
    "INSERT INTO events (day_number, time_slot, duration, type, category, title, speaker, location, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [day_number, time_slot, duration, type, category || null, title, speaker || null, location || null, description || null],
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
  const { day_number, time_slot, duration, type, category, title, speaker, location, description } = req.body;

  db.query(
    "UPDATE events SET day_number = ?, time_slot = ?, duration = ?, type = ?, category = ?, title = ?, speaker = ?, location = ?, description = ? WHERE id = ?",
    [day_number, time_slot, duration, type, category || null, title, speaker || null, location || null, description || null, id],
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
