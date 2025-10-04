import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/announcements", announcementRoutes);

app.listen(process.env.PORT, () =>
  console.log(`✅ Server running on port ${process.env.PORT}`)
);
