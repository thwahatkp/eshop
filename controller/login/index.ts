import { Request } from "express";
import { generateToken } from "../../auth/token";
import { LoginAttempt, Users } from "../../model";
import { isNull } from "../../helper/global";
import moment from "moment";
import { StatusCode } from "../../helper/types";

const { OK, BAD_REQUEST, FORBIDDEN, UNAUTHORIZED, NOT_FOUND } = StatusCode;

interface Search {
  mobile?: number;
  username?: string;
}

let loginUser = (req: Request) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { username, password } = req.body;
      if (isNull(username)) return reject({ status: BAD_REQUEST, message: "Please provide a username" });
      if (isNull(password)) return reject({ status: BAD_REQUEST, message: "Please provide a password" });
      let search: Search = { username: username };
      // <<======= checking username is mobile no =======>>
      if (!isNaN(username)) {
        username = parseInt(username);
        search = { mobile: username };
      }
      let user = await Users.findOne({
        $or: [search, { email: username }],
      }).select("-__v -createdAt -updatedAt");

      if (user) {
        // <<======= Checking user account blocked =======>>
        const blockedUser = await LoginAttempt.findOne({ username: user?.username });
        if (blockedUser) {
          if (blockedUser && blockedUser.blockedUntil && moment(blockedUser?.blockedUntil).isAfter(moment())) {
            const remainingTime = moment(blockedUser.blockedUntil).format("DD-MM-YY hh:mm a ");
            // const remainingTime = moment(blockedUser.blockedUntil).diff(moment(), 'seconds');
            console.log(remainingTime);
            // const formattedTime = moment.utc(remainingTime * 1000).format('LT') // Format as mm:ss
            // const formattedTime = moment.utc(remainingTime * 1000); // Format as mm:ss
            return reject({ status: FORBIDDEN, message: `Your account is blocked. Please try again after ${remainingTime} .` });
          }
        } else {
          await new LoginAttempt({
            ip: req.ip,
            username: username,
          }).save();
        }
        // <<======= Validate Password =======>>
        let pass = user.validatePassword(password, user.password);
        if (pass) {
          // <<======= User first login time =======>>
          if (blockedUser) {
            blockedUser.loginAttempts = 0;
            await blockedUser.save();
          }
          user = user.toObject();
          delete user.password;
          let token: string = generateToken({ _id: user._id });
          user.token = token;
          return resolve({ status: OK, data: user });
        } else {
          // <<======= checking user allready exist =======>>
          if (blockedUser) {
            blockedUser.loginAttempts++;
            if (blockedUser.loginAttempts === 3) {
              blockedUser.blockedUntil = moment().add(15, "minutes").format();
              // blockedUser.blockedUntil = moment().add(15, 'minutes').toDate(); // <<======= 15 minutes block  =======>>
            } else if (blockedUser.loginAttempts === 6) {
              blockedUser.blockedUntil = moment().add(30, "minutes").format();
            } else if (blockedUser.loginAttempts === 9) {
              blockedUser.blockedUntil = moment().add(1, "hours").format();
            } else if (blockedUser.loginAttempts === 12) {
              blockedUser.blockedUntil = moment().add(12, "hours").format();
            }

            blockedUser.date = moment().format("YYYY-MM-DD");
            blockedUser.time = moment().format("hh:mm:ss");
            await blockedUser.save();
          } else {
            const blockedUser = new LoginAttempt({
              ip: req.ip,
              username: username,
            }).save();
          }
          return reject({ status: UNAUTHORIZED, message: "Password is incorrect" });
        }
      } else {
        return reject({ status: NOT_FOUND, message: "No account exits" });
      }
    } catch (error) {
      reject({ status: BAD_REQUEST, message: error.message });
    }
  });
};

export default loginUser;
