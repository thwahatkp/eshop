let mongoose = require("mongoose");
let Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

let user = new Schema(
  {
    ip: String,
    fname: String,
    lname: String,
    username: String,
    mobile: Number,
    email: String,
    password: String,
    date: String,
    time: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

user.methods.generatePasswordHash = (password) => {
  const saltRounds = 10;
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};

user.methods.validatePassword = (password, hashedPassword) => {
  let res = bcrypt.compareSync(password, hashedPassword);
  return res;
};

let Users = mongoose.model("users", user);

module.exports = Users;
