const { generateToken } = require("../../auth/token");
const model = require("../../model");

let loginUser = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { username, password } = req.body;
      let user = await model.Users.findOne({
        $or: [{ username: username }, { mobile: parseInt(username) }],
      }).select("-__v -createdAt -updatedAt");
      if (user) {
        let pass = user.validatePassword(password, user.password);
        if (pass) {
          user = user.toObject();
          delete user.password;
          let token = generateToken({ _id: user._id });
          user.token = token;
          return resolve({ status: 200, data: user });
        } else {
          return reject({ status: 401, message: "Password is incorrect" });
        }
      } else {
        return reject({ status: 404, message: "No account exits" });
      }
    } catch (error) {
      reject({ status: 400, message: error.message });
    }
  });
};

module.exports = loginUser;
