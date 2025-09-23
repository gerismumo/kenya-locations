import { Router, Request, Response } from "express";
import { searchLocations } from "../../services";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const { q, limit } = req.query;

  if (!q || typeof q !== "string") {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  const results = searchLocations(
    q,
    limit ? parseInt(limit as string, 10) : 10
  );
  res.json(results);
});

export default router;
