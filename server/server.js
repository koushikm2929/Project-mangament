import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Server is live ✅");
});

// TEMP: comment everything else

// import { clerkMiddleware } from '@clerk/express';
// app.use(clerkMiddleware());

// import { protect } from './middlewares/authMiddleware.js';
// import workspaceRouter from "./routes/workspaceRoutes.js";
// app.use("/api/workspaces", protect, workspaceRouter);

// import { serve } from "inngest/express";
// import { inngest, functions } from './inngest/index.js';
// app.use("/api/inngest", serve({ client: inngest, functions }));

export default app;