import model from "../model";
import { verifyToken } from "./token";
import { Request, Response, NextFunction } from "express";

let auth = async (req: Request | any, res: Response, next: NextFunction) => {
  try {
    let token = req.cookies.token || req.session.token;
    if (req.isAuthenticated()) {
      return next();
    }
    if (!!token) {
      let response = verifyToken(token);
      if (response === "TokenExpiredError") {
        return res
          .status(401)
          .json({ status: false, message: "token expired" });
      }
      if (response === "JsonWebTokenError" || response === "SyntaxError") {
        return res
          .status(401)
          .json({ status: false, message: "please provide a valid token" });
      }
      let user = await model.Users.findById(response._id).select(
        "-password -__v -createdAt -updatedAt"
      );
      req.user = user;
      next();
    } else {
      return res
        .status(401)
        .json({ status: false, message: "Please provide a token" });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export { auth };
// function ensureAuthenticated(req: any, res: any, next: any) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   // res.redirect("http://localhost:3000/login");
//   res.status(401).json({
//     success: false,
//     message: "please login first",
//   });
// }
