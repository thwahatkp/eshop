import { Request } from "express";
import model from "../model";
import { StatusCode } from "../helper/types";
import tryCatch from "../middleware/tryCatch";
import AppError from "../utils/AppError";
import AppResponse from "../utils/AppResponse";
import { getOrSetCache } from "../helper/redis";
import { categoryBodyValidation } from "../utils/validation";

const { OK, BAD_REQUEST, CREATED } = StatusCode;

export const addCategory = tryCatch(async (req: Request) => {
  const { error } = categoryBodyValidation(req.body);

  if (error) throw new AppError(400, error.details[0].message, error.details);

  req.body.img = req.file.path.replace("public", "products");

  await new model.Category(req.body).save();

  return new AppResponse("category added successfully", null, 200);
});

export const listCategory = tryCatch(async (req: Request) => {
  const category = await getOrSetCache("category", async () => {
    const data = await model.Category.find().sort({ order: 1 });
    return data;
  });

  return new AppResponse(null, { data: category }, OK);
});
