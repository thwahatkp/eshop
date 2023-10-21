import { Request } from "express";
import { isNull } from "../helper/global";
import model from "../model";
import { ApiResponse, MongoID, StatusCode } from "../helper/types";
import tryCatch from "../middleware/tryCatch";
import AppError from "../utils/AppError";
import AppResponse from "../utils/AppResponse";

const { OK, BAD_REQUEST, CREATED } = StatusCode;

export const addCategory = tryCatch(async (req: Request) => {
  const { name, url, order } = req.body;
  if (isNull(name) || isNull(url) || isNull(order)) {
    throw new AppError(BAD_REQUEST, "Please provide a required fields");
  }
  const img = req.file.path.replace("public/", "");
  const category = await model.Menus.findOneAndUpdate(
    {},
    {
      $push: {
        categories: [
          {
            name,
            url,
            img,
            order,
          },
        ],
      },
    },
    { upsert: true }
  );
  return new AppResponse("success", {data:category}, OK);
});

export const listCategory = tryCatch(async (req: Request) => {
  const categorie: any = await model.Menus.aggregate([
    {
      $project: {
        categories: 1,
      },
    },
    {
      $addFields: {
        categories: {
          $sortArray: {
            input: "$categories",
            sortBy: { order: 1 },
          },
        },
      },
    },
  ]);
  return new AppResponse(null, { data: categorie[0] }, OK);
});
