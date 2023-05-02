let mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/eshop-db")
  .then((res) => {
    console.log("database connected successfully");
  })
  .catch((err) => console.log(err));
