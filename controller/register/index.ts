import express, { Request, Response, NextFunction } from "express";
import { generateToken } from "../../auth/token";
import { Users } from "../../model";
import { StatusCode } from "../../helper/types";
import tryCatch from "../../middleware/tryCatch";
import AppError from "../../utils/AppError";

const { BAD_REQUEST, CREATED, CONFLICT } = StatusCode;

export const registerUser = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  let { firstname, lastname, username, mobile, password, email } = req.body;
  let mobileExist = await Users.findOne({ mobile: mobile });
  let emailExist = await Users.findOne({ email: email });
  let usernameExist = await Users.findOne({ username: username });

  if (usernameExist) {
    return next(new AppError(CONFLICT, "Username already exists", { exists: "username" }));
  }

  if (mobileExist) {
    return next(new AppError(CONFLICT, "Mobile number already exists", { exists: "mobile" }));
  }

  if (emailExist) {
    return next(new AppError(CONFLICT, "Email address already exists", { exists: "email" }));
  }

  let response = new Users({
    fname: firstname,
    lname: lastname,
    mobile: mobile,
    username: username,
    email: email,
  });

  response.password = response.generatePasswordHash(password);
  response.save();
  response = response.toObject();
  delete response.password;
  let token = generateToken({ _id: response._id });
  res.cookie("token", token, { maxAge: 24 * 60 * 60 * 1000 });
  res.status(CREATED).json({ status: CREATED, data: response });
});

export function githubRegister(req: express.Request) {
  return new Promise((resolve, reject) => {
    try {
      resolve("called");
    } catch (error) {
      reject({ status: BAD_REQUEST, message: error.message });
    }
  });
}
