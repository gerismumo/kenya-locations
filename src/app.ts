import express from "express";
import cors from "cors";


const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());


//link routes here
const apiRouter = express.Router();

app.get("/", (_req, res) => {
  res.send("ok");
});

export default app;
