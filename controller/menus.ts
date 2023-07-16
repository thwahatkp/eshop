import { Request } from "express";
import { isNull } from "../helper/global";
import * as model from "../model";
import { ApiResponse, MongoID, StatusCode } from "../helper/types";
import { Schema } from "mongoose";

const { OK, BAD_REQUEST, CREATED } = StatusCode;

export function addCategory(req: Request): Promise<ApiResponse> {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, url, order } = req.body;
      if (isNull(name) || isNull(url) || isNull(order)) {
        return reject({ status: BAD_REQUEST, success: false, message: "Please provide a required fields" });
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
      resolve({ status: CREATED, message: "category added successfullly" });
    } catch (error) {
      reject({ status: BAD_REQUEST, success: false, message: error.message });
    }
  });
}

export function listCategory(): Promise<ApiResponse> {
  return new Promise(async (resolve, reject) => {
    try {
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
      resolve({ status: OK, data: categorie[0].categories });
    } catch (error) {
      return reject({ status: BAD_REQUEST, message: error.message });
    }
  });
}
