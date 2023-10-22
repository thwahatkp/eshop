import { Request, Response, Router } from "express";
import { multerUpload } from "../helper/global";
import * as controller from "../controller/slider.controller";

const router = Router();

const upload = multerUpload("slider");

router.post("/", upload.single("image"), controller.addSlider);

router.get("/", controller.sliderList);

export default router;
