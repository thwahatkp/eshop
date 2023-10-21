import { Request } from "express";
import { isNull } from "../helper/global";
import  model from "../model";
import { ApiResponse, MongoID, StatusCode } from "../helper/types";
import tryCatch from "../middleware/tryCatch";
import AppError from "../utils/AppError";
import AppResponse from "../utils/AppResponse";
import { models } from "mongoose";

const { OK, BAD_REQUEST, CREATED } = StatusCode;

export const addSlider = tryCatch(async (req: Request) => {
  const { title, link, btn_name, description } = req.body;

  if (isNull(title)) throw new AppError(400, "please enter a title");

  if (isNull(link)) throw new AppError(400, "please enter provide a button link");

  if (isNull(btn_name)) throw new AppError(400, "please enter a button name");

  if (isNull(description)) throw new AppError(400, "please enter a description");

  const img = req.file.path.replace("public/", "");

  const slider = new model.Slider({
    title,
    link,
    btn_name,
    img,
    description,
  }).save();

  return new AppResponse("added successfully", null, 200);
});

export const sliderList = tryCatch(async (req: Request) => {
  const slider = await model.Slider.find({ status: 0 }).sort({ _id: -1 }).select("-createdAt -updatedAt -__v");

  return new AppResponse(null, {data:slider}, 200);
});
