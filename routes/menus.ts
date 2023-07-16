import { Request, Response, Router } from "express";
import multer from "multer";
import { multerUpload } from "../helper/global";
import * as controller from "../controller/menus";
import { ApiResponse } from "../helper/types";
import tryCatch from "../middleware/tryCatch";

const router = Router();

const upload = multerUpload("category");

router.post("/category", upload.single("img"), async (req: Request, res: Response) => {
  try {
    const response = await controller.addCategory(req);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.get("/category", async (req: Request, res: Response) => {
  try {
    const response = await controller.listCategory();
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

export default router;
