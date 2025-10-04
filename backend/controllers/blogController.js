import { db } from "../db/connection.js";

export const getBlogs = (req, res) => {
  db.query("SELECT * FROM blogs ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const addBlog = (req, res) => {
  const { title, content } = req.body;
  db.query("INSERT INTO blogs (title, content) VALUES (?, ?)", [title, content], err => {
    if (err) return res.status(500).send(err);
    res.sendStatus(201);
  });
};
