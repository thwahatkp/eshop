import { verify } from "jsonwebtoken";

import { ACCESS_TOKEN_SECRET } from "../config";

export const verifyToken = (token: string) => {
  try {
    let response = verify(token, ACCESS_TOKEN_SECRET);
    return response;
  } catch (error) {
    return error.name;
  }
};
