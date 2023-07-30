import { NextFunction, Request, Response } from "express";
import { isNull } from "../helper/global";
import * as model from "../model";
import { ApiResponse, MongoID, StatusCode } from "../helper/types";
import { Schema } from "mongoose";
import tryCatch from "../middleware/tryCatch";
import AppError from "../utils/AppError";

const { OK, BAD_REQUEST, CREATED } = StatusCode;

export const addCategory = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const { name, url, order } = req.body;
  if (isNull(name) || isNull(url) || isNull(order)) {
    return next(new AppError(BAD_REQUEST, "Please provide a required fields"));
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

  res.status(OK).json({ success: true, code: OK, data: category });
});

export const listCategory = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
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
  res.status(OK).json({ status: OK, data: categorie[0].categories });
});
