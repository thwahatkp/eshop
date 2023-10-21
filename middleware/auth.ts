import model from "../model";
import { verifyToken } from "../auth/token";
import { NextFunction, Request, Response } from "express";
import tryCatch from "./tryCatch";
import AppError from "../utils/AppError";
// import AppResponse from "../utils/AppResponse";

let auth = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  let token = req.cookies.token;
  if (!!token) {
    let response = verifyToken(token);
    if (response === "TokenExpiredError") {
      throw new AppError(401, "token expired");
    }
    if (response === "JsonWebTokenError" || response === "SyntaxError") {
      throw new AppError(401, "please provide a valid token");
    }
    let user = await model.Users.findById(response._id).select("-password -__v -createdAt -updatedAt");
    req.user = user;
    next();
  } else {
    throw new AppError(401, "please provide a token");
  }
});

const _auth = auth;
export { _auth as auth };
