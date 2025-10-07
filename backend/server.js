import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'heads_db'
};

// Import routes
import blogRoutes from "./routes/blogRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

// Use routes
app.use("/api/blogs", blogRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/events", eventRoutes);

// LEE routes - add them directly here to avoid import issues
app.post('/api/lee/register', async (req, res) => {
  let connection;
  try {
    const { name, email, age, phone } = req.body;

    // Validation
    if (!name || !email || !age || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
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

    // Create database connection
    try {
      connection = await mysql.createConnection(dbConfig);
    } catch (dbError) {
      console.error('Database connection error:', dbError.message);
      return res.status(500).json({ 
        success: false, 
        message: 'Database connection failed. Please try again later.' 
      });
    }

    // Check if email already exists
    const [existingLEE] = await connection.execute(
      'SELECT id FROM lee_registrations WHERE email = ?',
      [email]
    );

    if (existingLEE.length > 0) {
      await connection.end();
      return res.status(409).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Insert new LEE registration
    const [result] = await connection.execute(
      'INSERT INTO lee_registrations (name, email, age, phone, created_at) VALUES (?, ?, ?, ?, NOW())',
      [name, email, ageNum, phone]
    );

    await connection.end();

    res.status(201).json({
      success: true,
      message: 'LEE registration successful',
      data: {
        id: result.insertId,
        name,
        email,
        age: ageNum,
        phone
      }
    });

  } catch (error) {
    console.error('Error creating LEE registration:', error);
    if (connection) {
      await connection.end();
    }
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

app.get('/api/lee', async (req, res) => {
  let connection;
  try {
    // Create database connection
    connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      'SELECT id, name, email, age, phone, created_at FROM lee_registrations ORDER BY created_at DESC'
    );

    await connection.end();

    res.status(200).json({
      success: true,
      data: rows
    });

  } catch (error) {
    console.error('Error fetching LEE registrations:', error);
    if (connection) {
      await connection.end();
    }
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

const PORT = process.env.PORT || 3001;

// Test database connection on startup
async function testDatabaseConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('SELECT 1');
    await connection.end();
    console.log('✅ Database connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('⚠️  Server will run without database functionality');
    return false;
  }
}

app.listen(PORT, async () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log('LEE API available at: http://localhost:3001/api/lee/register');
  
  // Test database connection
  await testDatabaseConnection();
});
