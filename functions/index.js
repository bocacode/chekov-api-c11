import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// routes:
app.get("/tasks", getTasks);
app.post("/tasks", addTask);

export const api = onRequest(app); // exports the cloud function
