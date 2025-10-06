import express from "express";
import { 
  getBlogs, 
  getAllBlogs, 
  getBlogById, 
  submitBlog, 
  approveBlog, 
  rejectBlog, 
  addBlog 
} from "../controllers/blogController.js";
const router = express.Router();

// Public routes
router.get("/", getBlogs); // Only approved blogs
router.post("/submit", submitBlog); // Submit new blog for approval

// Admin routes (must come before /:id route)
router.get("/admin/all", getAllBlogs); // Get all blogs including pending
router.put("/admin/approve/:id", approveBlog); // Approve blog
router.delete("/admin/reject/:id", rejectBlog); // Reject/delete blog

// Single blog route (must come after admin routes)
router.get("/:id", getBlogById); // Get single blog

// Legacy route for backward compatibility
router.post("/", addBlog);

export default router;
