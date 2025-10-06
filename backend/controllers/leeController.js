import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'conference_db'
};

// Create LEE registration
const createLEERegistration = async (req, res) => {
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
    const connection = await mysql.createConnection(dbConfig);

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
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
};

// Get all LEE registrations (for admin use)
const getAllLEERegistrations = async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

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
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
};

// Get LEE registration by ID
const getLEERegistrationById = async (req, res) => {
  try {
    const { id } = req.params;

    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      'SELECT id, name, email, age, phone, created_at FROM lee_registrations WHERE id = ?',
      [id]
    );

    await connection.end();

    if (rows.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'LEE registration not found' 
      });
    }

    res.status(200).json({
      success: true,
      data: rows[0]
    });

  } catch (error) {
    console.error('Error fetching LEE registration:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
};

export {
  createLEERegistration,
  getAllLEERegistrations,
  getLEERegistrationById
};
