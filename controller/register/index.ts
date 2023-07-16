import express from "express";
import { generateToken } from "../../auth/token";
import { Users } from "../../model";
import { StatusCode } from "../../helper/types";

const { BAD_REQUEST, CREATED, CONFLICT } = StatusCode;

export function registerUser(req: express.Request) {
  return new Promise(async (resolve, reject) => {
    try {
      let { firstname, lastname, username, mobile, password, email } = req.body;
      let mobileExist = await Users.findOne({ mobile: mobile });
      let emailExist = await Users.findOne({ email: email });
      let usernameExist = await Users.findOne({ username: username });
      if (usernameExist) {
        return reject({
          status: CONFLICT,
          exists: "username",
          message: "Username already exists",
        });
      }
      if (mobileExist) {
        return reject({
          status: CONFLICT,
          exists: "mobile",
          message: "Mobile number already exists",
        });
      }
      if (emailExist) {
        return reject({
          status: CONFLICT,
          exists: "email",
          message: "Email address already exists",
        });
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
      resolve({
        status: CREATED,
        data: response,
        token: token,
      });
    } catch (error) {
      reject({ status: BAD_REQUEST, message: error.message });
    }
  });
}

export function githubRegister(req: express.Request) {
  return new Promise((resolve, reject) => {
    try {
      resolve("called");
    } catch (error) {
      reject({ status: BAD_REQUEST, message: error.message });
    }
  });
}
