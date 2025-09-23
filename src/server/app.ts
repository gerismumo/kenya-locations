import express, { Request, Response } from "express";
import cors from "cors";
import apiRouter from "./routes";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("ok");
});

app.use("/api", apiRouter);

export default app;
