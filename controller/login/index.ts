import { Request, Response } from "express";
import { generateToken } from "../../auth/token";
import { LoginAttempt, Users } from "../../model";
import { isNull } from "../../helper/global";
import moment from "moment";
import { StatusCode } from "../../helper/types";
import tryCatch from "../../middleware/tryCatch";
import AppError from "../../utils/AppError";
import AppResponse from "../../utils/AppResponse";
import cookie from "cookie";

const { OK, BAD_REQUEST, FORBIDDEN, UNAUTHORIZED, NOT_FOUND } = StatusCode;

interface Search {
  mobile?: number;
  username?: string;
}

let loginUser = tryCatch(async (req: Request, res: Response) => {
  let { username, password } = req.body;
  if (isNull(username)) throw new AppError(BAD_REQUEST, "Please provide a username");
  if (isNull(password)) throw new AppError(BAD_REQUEST, "Please provide a password");
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
        // const formattedTime = moment.utc(remainingTime * 1000).format('LT') // Format as mm:ss
        // const formattedTime = moment.utc(remainingTime * 1000); // Format as mm:ss
        throw new AppError(FORBIDDEN, `Your account is blocked. Please try again after ${remainingTime}.`);
      }
    } else {
      await new LoginAttempt({ ip: req.ip, username: username }).save();
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
      delete user.date;
      delete user.time;
      let token: string = generateToken({ _id: user._id });
      const twoDaysInSeconds = 2 * 24 * 60 * 60; // 2 days in seconds
      const expirationDate = new Date(Date.now() + twoDaysInSeconds * 1000);
      // const sameSiteNoneCookie = cookie.serialize("token", token, {
      //   sameSite: "none",
      //   secure: true, // Set this to true if using HTTPS
      //   maxAge: twoDaysInSeconds,
      // });

      // Set the cookie in the response header
      // res.setHeader("Set-Cookie", sameSiteNoneCookie);
      res.cookie("token", token, { maxAge: 48 * 60 * 60 * 1000, sameSite: "none", secure: true });
      return new AppResponse("success", user, OK);
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
      throw new AppError(UNAUTHORIZED, "Password is incorrect");
    }
  } else {
    throw new AppError(NOT_FOUND, "No account exits");
  }
});

export default loginUser;
