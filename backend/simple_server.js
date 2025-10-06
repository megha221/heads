import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import { db } from "./db/connection.js";

const app = express();

app.use(cors());
app.use(express.json());

// Import existing routes
import blogRoutes from "./routes/blogRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

// Use existing routes
app.use("/api/blogs", blogRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/events", eventRoutes);

// LEE registration endpoint with database
app.post('/api/lee/register', async (req, res) => {
  try {
    const { name, email, age, phone, gender, occupation, residence, education, languages } = req.body;

    // Validation
    if (!name || !email || !age || !phone || !gender || !occupation || !residence || !education || !languages || languages.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required and at least one language must be selected' 
      });
    }

    // Validate age
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      return res.status(400).json({ 
        success: false, 
        message: 'Age must be between 18 and 100' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Try to save to database using the same connection as other endpoints
    try {
      // First check if email already exists
      const checkQuery = 'SELECT id FROM lee_registrations WHERE email = ?';
      db.query(checkQuery, [email], (err, results) => {
        if (err) {
          console.error('Database error:', err.message);
          // Fallback: just log the data if database fails
          console.log('LEE Registration received (database failed):', { name, email, age: ageNum, phone });
          
          return res.status(201).json({
            success: true,
            message: 'LEE registration successful (saved to console - database unavailable)',
            data: {
              name,
              email,
              age: ageNum,
              phone
            }
          });
        }

        if (results.length > 0) {
          return res.status(409).json({ 
            success: false, 
            message: 'Email already registered' 
          });
        }

        // Insert new LEE registration
        const languagesString = Array.isArray(languages) ? languages.join(', ') : languages;
        const insertQuery = 'INSERT INTO lee_registrations (name, email, age, phone, gender, occupation, residence, education, language, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())';
        db.query(insertQuery, [name, email, ageNum, phone, gender, occupation, residence, education, languagesString], (err, result) => {
          if (err) {
            console.error('Database insert error:', err.message);
            // Fallback: just log the data if database fails
            console.log('LEE Registration received (database failed):', { name, email, age: ageNum, phone, gender, occupation, residence, education, languages });
            
            return res.status(201).json({
              success: true,
              message: 'LEE registration successful (saved to console - database unavailable)',
              data: {
                name,
                email,
                age: ageNum,
                phone,
                gender,
                occupation,
                residence,
                education,
                languages
              }
            });
          }

          res.status(201).json({
            success: true,
            message: 'LEE registration successful and saved to database',
            data: {
              id: result.insertId,
              name,
              email,
              age: ageNum,
              phone,
              gender,
              occupation,
              residence,
              education,
              languages
            }
          });
        });
      });

    } catch (error) {
      console.error('Unexpected error:', error.message);
      // Fallback: just log the data if database fails
      console.log('LEE Registration received (unexpected error):', { name, email, age: ageNum, phone });
      
      res.status(201).json({
        success: true,
        message: 'LEE registration successful (saved to console - database unavailable)',
        data: {
          name,
          email,
          age: ageNum,
          phone
        }
      });
    }

  } catch (error) {
    console.error('Error creating LEE registration:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

app.get('/api/lee', (req, res) => {
  res.json({
    success: true,
    message: 'LEE API is working',
    data: []
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log('Available endpoints:');
  console.log('  - Announcements: http://localhost:3001/api/announcements');
  console.log('  - Events: http://localhost:3001/api/events');
  console.log('  - Blogs: http://localhost:3001/api/blogs');
  console.log('  - LEE Registration: http://localhost:3001/api/lee/register');
});
