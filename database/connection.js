let mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/eshop-db")
  .then((res) => {
    console.log("database connected successfully");
  })
  .catch((err) => console.log(err));
