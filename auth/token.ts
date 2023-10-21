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

export let verifyToken = (token: string) => {
  try {
    let response = verify(token, process.env.JWT_SECRET);
    return response;
  } catch (error) {
    return error.name;
  }
};
