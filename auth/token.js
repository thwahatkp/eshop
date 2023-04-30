var jwt = require("jsonwebtoken");
let generateToken = (data) => {
  if (typeof data === "object") {
    if (Object.keys(data).length === 0) return "object is null";
    // let token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: 60 });
    let token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "2 days" });
    return token;
  } else {
    return "parameter must be object";
  }
};

let verifyToken = (token) => {
  try {
    let response = jwt.verify(token, process.env.JWT_SECRET);
    return response;
  } catch (error) {
    return error.name;
  }
};


module.exports.generateToken = generateToken;
module.exports.verifyToken = verifyToken;
