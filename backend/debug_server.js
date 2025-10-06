import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Test LEE route
app.post('/api/lee/register', (req, res) => {
  console.log('LEE registration received:', req.body);
  res.json({ 
    success: true, 
    message: 'Test registration successful',
    data: req.body 
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`✅ Debug server running on port ${PORT}`);
  console.log('Test endpoint: http://localhost:3001/test');
  console.log('LEE endpoint: http://localhost:3001/api/lee/register');
});
