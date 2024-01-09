import { Request } from "express";
import model from "../model";
import tryCatch from "../middleware/tryCatch";
import AppError from "../utils/AppError";
import AppResponse from "../utils/AppResponse";
import { getOrSetCache } from "../helper/redis";
import { sliderBodyValidation } from "../utils/validation";


export const addSlider = tryCatch(async (req: Request) => {
  const { title, link, btn_name, description } = req.body;

  const { error } = sliderBodyValidation(req.body);

  if (error) throw new AppError(400, error.details[0].message, error.details);

  const img = req.file.path.replace("public", "products");

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
  const slider = await getOrSetCache("slider", async () => {
    const data = await model.Slider.find({ status: 0 }).sort({ _id: -1 }).select("-createdAt -updatedAt -__v");
    return data;
  });

  return new AppResponse(null, { data: slider }, 200);
});
