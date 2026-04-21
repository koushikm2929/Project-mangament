import "dotenv/config";
import express from "express";
import cors from "cors";

// Routes
import workspaceRouter from "./routes/workspaceRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import commentRouter from "./routes/commentRoutes.js";

// Middleware
import { protect } from "./middlewares/authMiddleware.js";
import { clerkMiddleware } from "@clerk/express";

// Inngest
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

const app = express();

// ===== MIDDLEWARE =====
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// ===== HEALTH CHECK =====
app.get("/", (req, res) => {
  res.status(200).send("Server is live ✅");
});

// ===== INNGEST (IMPORTANT) =====
app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions,
  })
);

// ===== API ROUTES =====
app.use("/api/workspaces", protect, workspaceRouter);
app.use("/api/projects", protect, projectRouter);
app.use("/api/tasks", protect, taskRouter);
app.use("/api/comments", protect, commentRouter);

// ===== EXPORT FOR VERCEL =====
export default app;