const model = require("../model");
const { verifyToken } = require("./token");

let auth = async (req, res, next) => {
  try {
    let token = req.cookies.token;
    if (!!token) {
      let response = verifyToken(token);
      if (response === "TokenExpiredError") {
        return res.status(401).json({ staus: false, message: "token expired" });
      }
      if (response === "JsonWebTokenError" || response === "SyntaxError") {
        return res
          .status(401)
          .json({ staus: false, message: "please provide a valid token" });
      }
      let user = await model.Users.findById(response._id).select(
        "-password -__v -createdAt -updatedAt"
      );
      req.user = user;
      next();
    } else {
      return res
        .status(401)
        .json({ staus: false, message: "Please provide a token" });
    }
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

module.exports.auth = auth;
