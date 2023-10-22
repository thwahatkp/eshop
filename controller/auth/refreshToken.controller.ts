import { Request, Response } from "express";
import model from "../../model";
import { StatusCode } from "../../helper/types";
import tryCatch from "../../middleware/tryCatch";
import AppError from "../../utils/AppError";
import AppResponse from "../../utils/AppResponse";
import { verifyRefreshToken } from "../../auth/token";
import { Types } from "mongoose";
import { sign } from "jsonwebtoken";

const refreshToken = tryCatch(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  return verifyRefreshToken(refreshToken)
    .then((data: { tokenDetails: { _id: Types.ObjectId }; success: boolean; message: string }) => {
      const accessToken = sign({ _id: data.tokenDetails._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
      res.cookie("token", accessToken, { maxAge: 15000, sameSite: "none", secure: true });
      return new AppResponse("success", { accessToken }, StatusCode.OK);
    })
    .catch((err: { success: boolean; message: string }) => {
      throw new AppError(StatusCode.FORBIDDEN, err.message);
    });
});
export default refreshToken;
