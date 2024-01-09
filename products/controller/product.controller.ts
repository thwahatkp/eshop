import model from "../model";
import { ApiResponse, MongoID, StatusCode } from "../helper/types";
import tryCatch from "../middleware/tryCatch";
import AppError from "../utils/AppError";
import AppResponse from "../utils/AppResponse";
import { productBodyValidation } from "../utils/validation";
import { Request } from "express";
import { NextSequenceValue } from "../helper/global";

export const addProduct = tryCatch(async (req: Request) => {
  const { error } = productBodyValidation(req.body);

  if (error) throw new AppError(412, error.details[0].message, error.details);

  let sequence = new NextSequenceValue("product");

  req.body.uniqueId = await sequence.uniqueId("EPR");

  if (req.files && Array.isArray(req.files)) {
    req.body.images = req.files.map((item: Express.Multer.File) => {
      // Assuming "item.path" is the path of the uploaded file
      return item.path.replace("public", "products");
    });
  }
  const product = await new model.Product(req.body).save();
  sequence.save();

  return new AppResponse("product added successfully", null, 200);
});

export const getFlashDealProducts = tryCatch(async (req: Request) => {
  const products = await model.Product.find({ isFlashDeal: true }).lean();

  return new AppResponse(null, { data: products }, 200);
});
