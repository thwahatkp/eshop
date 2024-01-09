import { Router } from "express";
import { multerUpload } from "../helper/global";
import * as controller from "../controller/category.controller";

const router = Router();

const upload = multerUpload("category");

router.post("/", upload.single("img"), controller.addCategory);

router.get("/", controller.listCategory);

export default router;
