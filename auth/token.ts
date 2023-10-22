import { sign, verify } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import model from "../model";
import mongoose, { mongo } from "mongoose";

export const generateToken = async (user: { _id: mongoose.Types.ObjectId }): Promise<{ accessToken: string; refreshToken: string }> => {
  try {
    const payload = { _id: user._id };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30d" });

    const userToken = await model.UserToken.findOne({ userId: user._id });

    if (userToken) await userToken.deleteOne();

    await new model.UserToken({ userId: user._id, token: refreshToken }).save();
    return Promise.resolve({ accessToken, refreshToken });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const verifyToken = (token: string) => {
  try {
    let response = verify(token, process.env.ACCESS_TOKEN_SECRET);
    return response;
  } catch (error) {
    return error.name;
  }
};

export const verifyRefreshToken = (refreshToken: string) => {
  return new Promise(async (resolve, reject) => {
    const doc = await model.UserToken.findOne({ token: refreshToken });

    if (!doc) return reject({ success: false, message: "Invalid refresh token" });

    verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err: Error, tokenDetails: object) => {
      if (err) return reject({ success: false, message: "Invalid refresh token" });
      resolve({
        tokenDetails,
        success: true,
        message: "Valid refresh token",
      });
    });
  });
};
