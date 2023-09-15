import { Request, Response, Router } from "express";
import { multerUpload } from "../helper/global";
import * as controller from "../controller/menus";

const router = Router();

const upload = multerUpload("category");

router.post("/category", upload.single("img"), controller.addCategory);

router.get("/category", controller.listCategory);

export default router;
