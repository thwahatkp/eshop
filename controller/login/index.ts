import { Request } from "express";
import { generateToken } from "../../auth/token";
import { Users } from "../../model";

interface Search {
  mobile?: number; username?: string
}

let loginUser = (req: Request) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { username, password } = req.body;
      let search: Search = { username: username };
      if (!isNaN(username)) {
        username = parseInt(username);
        search = { mobile: username };
      }
      let user = await Users.findOne({
        $or: [search, { email: username }],
      }).select("-__v -createdAt -updatedAt");
      if (user) {
        let pass = user.validatePassword(password, user.password);
        if (pass) {
          user = user.toObject();
          delete user.password;
          let token: string = generateToken({ _id: user._id });
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

export default loginUser;
