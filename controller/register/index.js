const { generateToken } = require("../../auth/token");
const model = require("../../model");

const registerUser = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { firstname, lastname, username, mobile, password, email } = req.body;
      let mobileExist = await model.Users.findOne({ mobile: mobile });
      let emailExist = await model.Users.findOne({ email: email });
      let usernameExist = await model.Users.findOne({ username: username });
      console.log(usernameExist);
      if (usernameExist) {
        return reject({
          status: 302,
          message: "Username already exists",
        });
      }
      if (mobileExist) {
        return reject({
          status: 302,
          message: "Mobile number already exists",
        });
      }
      if (emailExist) {
        return reject({
          status: 302,
          message: "Email address already exists",
        });
      }
      let response = model.Users({
        fname: firstname,
        lname: lastname,
        mobile: mobile,
        username: username,
        email: email,
      });
      response.password = response.generatePasswordHash(password);
      response.save();
      let token = generateToken({ _id: response._id });
      resolve({
        status: 201,
        message: "registered successfully",
        token: token,
      });
    } catch (error) {
      reject({ status: 400, message: error.message });
    }
  });
};
module.exports = registerUser;
