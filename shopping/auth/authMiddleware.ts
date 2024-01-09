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
      console.log(response);
      if (response === "TokenExpiredError") {
        return res.status(401).json({ status: false, message: "token expired" });
      }
      if (response === "JsonWebTokenError" || response === "SyntaxError") {
        return res.status(401).json({ status: false, message: "please provide a valid token" });
      }
      req.user = response;
      next();
    } else {
      return res.status(401).json({ status: false, message: "Please provide a token" });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

export { auth };
