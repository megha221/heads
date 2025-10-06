import express from 'express';
import {
  getEvents,
  getEventsByDay,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js';

const router = express.Router();

// GET /api/events - Get all events
router.get('/', getEvents);

// GET /api/events/day/:day - Get events by day (day1 or day2)
router.get('/day/:day', getEventsByDay);

// GET /api/events/:id - Get single event by ID
router.get('/:id', getEventById);

// POST /api/events - Create new event
router.post('/', createEvent);

// PUT /api/events/:id - Update event
router.put('/:id', updateEvent);

// DELETE /api/events/:id - Delete event
router.delete('/:id', deleteEvent);

export default router;
