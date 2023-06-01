import { connect } from "mongoose";
// connect("mongodb://127.0.0.1:27017/eshop-db")
connect(process.env.DB_URL)
  .then((res) => {
    console.log("database connected successfully");
  })
  .catch((err) => console.log(err));
