import { db } from "../db/connection.js";

// Get only approved blogs for public view
export const getBlogs = (req, res) => {
  console.log("getBlogs called - should return only approved blogs");
  db.query("SELECT * FROM blogs WHERE is_approved = 1 ORDER BY created_at DESC", (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send(err);
    }
    console.log(`Found ${results.length} approved blogs`);
    res.json(results);
  });
};

// Get all blogs (including pending) for admin panel
export const getAllBlogs = (req, res) => {
  console.log("getAllBlogs called - should return all blogs including pending");
  db.query("SELECT * FROM blogs ORDER BY submitted_at DESC", (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send(err);
    }
    console.log(`Found ${results.length} total blogs`);
    res.json(results);
  });
};

// Get single blog by ID
export const getBlogById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM blogs WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).json({ message: "Blog not found" });
    res.json(results[0]);
  });
};

// Submit new blog (directly approved)
export const submitBlog = (req, res) => {
  const { title, content, username, image } = req.body;
  
  if (!title || !content || !username) {
    return res.status(400).json({ message: "Title, content, and username are required" });
  }
  
  db.query(
    "INSERT INTO blogs (title, content, username, image, is_approved) VALUES (?, ?, ?, ?, 1)",
    [title, content, username, image || null],
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send(err);
      }
      res.status(201).json({ 
        id: result.insertId, 
        message: "Blog published successfully" 
      });
    }
  );
};

// Approve blog (admin only)
export const approveBlog = (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE blogs SET is_approved = 1 WHERE id = ?",
    [id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.affectedRows === 0) return res.status(404).json({ message: "Blog not found" });
      res.json({ message: "Blog approved successfully" });
    }
  );
};

// Reject/Delete blog (admin only)
export const rejectBlog = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM blogs WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog rejected and deleted successfully" });
  });
};

// Legacy function for backward compatibility
export const addBlog = (req, res) => {
  const { title, content } = req.body;
  db.query("INSERT INTO blogs (title, content, is_approved) VALUES (?, ?, 1)", [title, content], err => {
    if (err) return res.status(500).send(err);
    res.sendStatus(201);
  });
};
