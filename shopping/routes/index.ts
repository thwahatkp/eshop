import { Request, Response } from "express";
import { Router } from "express";

var router = Router();

// router.get("/", async function (req: Request, res: Response) {
router.get("/", async function (req: Request, res: Response) {
  res.status(200).send("Product service running 🚀");
});

export default router;
