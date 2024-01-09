import { Request, Response } from "express";
import { Router } from "express";
import { auth } from "../auth/authMiddleware";
import * as controllers from "../controller/product.controller";
import { multerUpload } from "../helper/global";

var router = Router();

const upload = multerUpload("products");

router.post("/", auth, upload.array("images"), controllers.addProduct);

router.get("/flash-deals", auth, controllers.getFlashDealProducts);

router.get("/", auth, async function (req: Request, res: Response) {
  res.status(200).send("Products service running 🚀");
});

export default router;
