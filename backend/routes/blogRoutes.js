import express from "express";
import { getBlogs, addBlog } from "../controllers/blogController.js";
const router = express.Router();

router.get("/", getBlogs);
router.post("/", addBlog);

export default router;
