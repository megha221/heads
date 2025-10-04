import { db } from "../db/connection.js";

export const getAnnouncements = (req, res) => {
  db.query("SELECT * FROM announcements ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};
