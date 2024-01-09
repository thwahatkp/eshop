import { Request, Response, NextFunction } from "express";
import AppResponse from "../utils/AppResponse";
import AppError from "../utils/AppError";
import { getReasonPhrase } from "http-status-codes";
import { ApiResponse } from "../helper/types";
import { isNull } from "../helper/global";

const tryCatch = (errFunction: Function) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await errFunction(req, res, next);
    if (result instanceof AppResponse) {
      ResponseHandler(res, result);
    } else {
      next(new AppError(500, "Invalid Response. Expected Response object."));
    }
    return;
  } catch (error) {
    return next(error);
  }
};

const ResponseHandler = (res: Response, result: ApiResponse) => {
  let response: { code: number; success: boolean; status: string; message?: string; data?: object } = {
    code: result.statusCode,
    success: true,
    status: getReasonPhrase(result.statusCode),
  };

  if (!isNull(result.message)) {
    response.message = result.message;
  }

  if (!isNull(result.data)) {
    response = { ...response, ...result.data };
  }

  res.status(result.statusCode).json(response);
};

export default tryCatch;
