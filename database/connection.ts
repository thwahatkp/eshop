import { connect } from "mongoose";
import logger from "../logger";

// connect("mongodb://127.0.0.1:27017/eshop-db")
// connect(process.env.DB_URL)
connect("mongodb+srv://thwahatkp:6238583014@cluster0.jm1dir3.mongodb.net/eshop-db?retryWrites=true&w=majority")
  .then((res) => {
    logger.info("database connected successfully");
  })
  .catch((err) => logger.error(err.message));
