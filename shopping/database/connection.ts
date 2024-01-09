import { connect } from "mongoose";
import logger from "../logger";
import { ACCESS_TOKEN_SECRET, DB_URL, PORT, REFRESH_TOKEN_SECRET } from "../config";

if (!PORT) throw new Error("Port required");

if (!ACCESS_TOKEN_SECRET) throw new Error("Access token secret required");

if (!REFRESH_TOKEN_SECRET) throw new Error("Refresh token secret required");

if (!DB_URL) throw new Error("Databse url required");

// connect("mongodb://127.0.0.1:27017/eshop-db")
const connectDB = () => {
  return new Promise((resolve, reject) => {
    connect(DB_URL)
      .then(() => {
        console.log("database connected successfully");
        // logger.info("database connected successfully");
        resolve("");
      })
      .catch((err) => logger.error(err.message));
  });
};
export default connectDB;
