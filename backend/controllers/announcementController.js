import { db } from "../db/connection.js";

export const getAnnouncements = (req, res) => {
  db.query("SELECT * FROM announcements ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const getAnnouncementById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM announcements WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).json({ message: "Announcement not found" });
    res.json(results[0]);
  });
};

export const createAnnouncement = (req, res) => {
  const { title, description, image, category, google_scholar_url, linkedin_url, youtube_url } = req.body;
  db.query(
    "INSERT INTO announcements (title, description, image, category, google_scholar_url, linkedin_url, youtube_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [title, description, image || null, category || "General", google_scholar_url || null, linkedin_url || null, youtube_url || null],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId, message: "Announcement created successfully" });
    }
  );
};

export const updateAnnouncement = (req, res) => {
  const { id } = req.params;
  const { title, description, image, category, google_scholar_url, linkedin_url, youtube_url } = req.body;
  db.query(
    "UPDATE announcements SET title = ?, description = ?, image = ?, category = ?, google_scholar_url = ?, linkedin_url = ?, youtube_url = ? WHERE id = ?",
    [title, description, image || null, category || "General", google_scholar_url || null, linkedin_url || null, youtube_url || null, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.affectedRows === 0) return res.status(404).json({ message: "Announcement not found" });
      res.json({ message: "Announcement updated successfully" });
    }
  );
};

export const deleteAnnouncement = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM announcements WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Announcement not found" });
    res.json({ message: "Announcement deleted successfully" });
  });
};
