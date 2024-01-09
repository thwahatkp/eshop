import { NextFunction, Request, Response } from "express";
import Error from "../utils/AppError";
import { getReasonPhrase } from "http-status-codes";

interface ResponseType {
  code: any;
  success: boolean;
  message?: string;
  error: string;
  data?: object;
}

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  let code = err.code || 500;
  let message = err.message || "Internal Server Error";
  let success = false;
  let data = err.data || null;

  // mongodb id error
  if (err.name === "CastError") {
    const message: string = `Resource Not Found. Invalid: ${err.path}`;
    err = new Error(400, message);
  }

  // mongoose duplicate key error
  if (err.code === 11000) {
    const message: string = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new Error(400, message);
  }

  // wrong jwt error
  if (err.code === "JsonWebTokenError") {
    const message: string = "JWT Error";
    err = new Error(400, message);
  }

  // jwt expire error
  if (err.code === "TokenExpiredError") {
    const message: string = "JWT is Expired";
    err = new Error(400, message);
  }

  const response: ResponseType = {
    code,
    success,
    error: getReasonPhrase(code),
  };

  if (message) response.message = message;
  if (data) response.data = data;

  res.status(code).json(response);
};

export default errorMiddleware;
