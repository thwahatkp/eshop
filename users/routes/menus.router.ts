import { Request, Response, Router } from "express";
import { multerUpload } from "../helper/global";
import * as controller from "../controller/menus.controller";

const router = Router();

const upload = multerUpload("category");


export default router;
