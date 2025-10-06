import express from 'express';
import { 
  createLEERegistration, 
  getAllLEERegistrations, 
  getLEERegistrationById 
} from '../controllers/leeController.js';

const router = express.Router();

// POST /api/lee/register - Create new LEE registration
router.post('/register', createLEERegistration);

// GET /api/lee - Get all LEE registrations (for admin)
router.get('/', getAllLEERegistrations);

// GET /api/lee/:id - Get LEE registration by ID
router.get('/:id', getLEERegistrationById);

export default router;
