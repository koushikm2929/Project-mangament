import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// ✅ health check
app.get("/", (req, res) => {
  res.status(200).send("Server is live ✅");
});

// ✅ test inngest ONLY
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

app.use("/api/inngest", serve({ client: inngest, functions }));

export default app;