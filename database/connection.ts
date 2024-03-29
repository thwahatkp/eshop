import { connect } from "mongoose";
import logger from "../logger";


// connect("mongodb://127.0.0.1:27017/eshop-db")
const connectDB = () => {
  return new Promise((resolve, reject) => {
    connect(process.env.DB_URL)
      .then((res) => {
        console.log("database connected successfully");
        // logger.info("database connected successfully");
        resolve("");
      })
      .catch((err) => logger.error(err.message));
  });
};
export default connectDB;
