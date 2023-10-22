"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../../auth/token");
const model_1 = __importDefault(require("../../model"));
const global_1 = require("../../helper/global");
const moment_1 = __importDefault(require("moment"));
const types_1 = require("../../helper/types");
const tryCatch_1 = __importDefault(require("../../middleware/tryCatch"));
const AppError_1 = __importDefault(require("../../utils/AppError"));
const AppResponse_1 = __importDefault(require("../../utils/AppResponse"));
const { OK, BAD_REQUEST, FORBIDDEN, UNAUTHORIZED, NOT_FOUND } = types_1.StatusCode;
let loginUser = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, password } = req.body;
    if ((0, global_1.isNull)(username))
        throw new AppError_1.default(BAD_REQUEST, "Please provide a username");
    if ((0, global_1.isNull)(password))
        throw new AppError_1.default(BAD_REQUEST, "Please provide a password");
    let search = { username: username };
    // <<======= checking username is mobile no =======>>
    if (!isNaN(username)) {
        username = parseInt(username);
        search = { mobile: username };
    }
    let user = yield model_1.default.Users.findOne({
        $or: [search, { email: username }],
    }).select("-__v -createdAt -updatedAt");
    if (user) {
        // <<======= Checking user account blocked =======>>
        const blockedUser = yield model_1.default.LoginAttempt.findOne({ username: user === null || user === void 0 ? void 0 : user.username });
        if (blockedUser) {
            if (blockedUser && blockedUser.blockedUntil && (0, moment_1.default)(blockedUser === null || blockedUser === void 0 ? void 0 : blockedUser.blockedUntil).isAfter((0, moment_1.default)())) {
                const remainingTime = (0, moment_1.default)(blockedUser.blockedUntil).format("DD-MM-YY hh:mm a ");
                // const remainingTime = moment(blockedUser.blockedUntil).diff(moment(), 'seconds');
                // const formattedTime = moment.utc(remainingTime * 1000).format('LT') // Format as mm:ss
                // const formattedTime = moment.utc(remainingTime * 1000); // Format as mm:ss
                throw new AppError_1.default(FORBIDDEN, `Your account is blocked. Please try again after ${remainingTime}.`);
            }
        }
        else {
            yield new model_1.default.LoginAttempt({ ip: req.ip, username: username }).save();
        }
        // <<======= Validate Password =======>>
        let pass = user.validatePassword(password, user.password);
        if (pass) {
            // <<======= User first login time =======>>
            if (blockedUser) {
                blockedUser.loginAttempts = 0;
                yield blockedUser.save();
            }
            user = user.toObject();
            delete user.password;
            delete user.date;
            delete user.time;
            let { accessToken, refreshToken } = yield (0, token_1.generateToken)({ _id: user._id });
            const twoDaysInSeconds = 2 * 24 * 60 * 60; // 2 days in seconds
            const expirationDate = new Date(Date.now() + twoDaysInSeconds * 1000);
            // const sameSiteNoneCookie = cookie.serialize("token", token, {
            //   sameSite: "none",
            //   secure: true, // Set this to true if using HTTPS
            //   maxAge: twoDaysInSeconds,
            // });
            // Set the cookie in the response header
            // res.setHeader("Set-Cookie", sameSiteNoneCookie);
            // res.cookie("token", accessToken, { maxAge: 48 * 60 * 60 * 1000, sameSite: "none", secure: true });
            res.cookie("token", accessToken, { maxAge: 15000, sameSite: "none", secure: true });
            return new AppResponse_1.default("success", { data: user, accessToken, refreshToken }, OK);
        }
        else {
            // <<======= checking user allready exist =======>>
            if (blockedUser) {
                blockedUser.loginAttempts++;
                if (blockedUser.loginAttempts === 3) {
                    blockedUser.blockedUntil = (0, moment_1.default)().add(15, "minutes").format();
                    // blockedUser.blockedUntil = moment().add(15, 'minutes').toDate(); // <<======= 15 minutes block  =======>>
                }
                else if (blockedUser.loginAttempts === 6) {
                    blockedUser.blockedUntil = (0, moment_1.default)().add(30, "minutes").format();
                }
                else if (blockedUser.loginAttempts === 9) {
                    blockedUser.blockedUntil = (0, moment_1.default)().add(1, "hours").format();
                }
                else if (blockedUser.loginAttempts === 12) {
                    blockedUser.blockedUntil = (0, moment_1.default)().add(12, "hours").format();
                }
                blockedUser.date = (0, moment_1.default)().format("YYYY-MM-DD");
                blockedUser.time = (0, moment_1.default)().format("hh:mm:ss");
                yield blockedUser.save();
            }
            else {
                const blockedUser = new model_1.default.LoginAttempt({
                    ip: req.ip,
                    username: username,
                }).save();
            }
            throw new AppError_1.default(UNAUTHORIZED, "Password is incorrect");
        }
    }
    else {
        throw new AppError_1.default(NOT_FOUND, "No account exits");
    }
}));
exports.default = loginUser;
//# sourceMappingURL=login.controller.js.map