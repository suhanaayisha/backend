import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/name", (req: Request, res: Response) => {
  res.json({ name: "Suhana Ayisha" });
});

export default app;