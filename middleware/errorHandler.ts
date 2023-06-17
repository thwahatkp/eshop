import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/Error";

const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction): void => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // mongodb id error
  if (err.name === "CastError") {
    const errorMessage = `Resource Not Found. Invalid: ${err.path}`;
    const customError = new CustomError(errorMessage, 400);
    err = customError;
  }

  // mongoose duplicate key error
  if (err.code === 11000) {
    const errorMessage = `Duplicate ${Object.keys(err.keyValue)} entered`;
    const customError = new CustomError(errorMessage, 400);
    err = customError;
  }

  // wrong jwt error
  if (err.code === "JsonWebTokenError") {
    const errorMessage = "JWT Error";
    const customError = new CustomError(errorMessage, 400);
    err = customError;
  }

  // jwt expire error
  if (err.code === "TokenExpiredError") {
    const errorMessage = "JWT is Expired";
    const customError = new CustomError(errorMessage, 400);
    err = customError;
  }

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

export default errorMiddleware;
