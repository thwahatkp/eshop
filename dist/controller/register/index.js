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
exports.githubRegister = exports.registerUser = void 0;
const token_1 = require("../../auth/token");
const model_1 = require("../../model");
const types_1 = require("../../helper/types");
const tryCatch_1 = __importDefault(require("../../middleware/tryCatch"));
const AppError_1 = __importDefault(require("../../utils/AppError"));
const AppResponse_1 = __importDefault(require("../../utils/AppResponse"));
const { BAD_REQUEST, CREATED, CONFLICT } = types_1.StatusCode;
exports.registerUser = (0, tryCatch_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { firstname, lastname, username, mobile, password, email } = req.body;
    let mobileExist = yield model_1.Users.findOne({ mobile: mobile });
    let emailExist = yield model_1.Users.findOne({ email: email });
    let usernameExist = yield model_1.Users.findOne({ username: username });
    if (usernameExist) {
        throw new AppError_1.default(CONFLICT, "Username already exists", { exists: "username" });
    }
    if (mobileExist) {
        throw new AppError_1.default(CONFLICT, "Mobile number already exists", { exists: "mobile" });
    }
    if (emailExist) {
        throw new AppError_1.default(CONFLICT, "Email address already exists", { exists: "email" });
    }
    let response = new model_1.Users({
        fname: firstname,
        lname: lastname,
        mobile: mobile,
        username: username,
        email: email,
    });
    response.password = response.generatePasswordHash(password);
    response.save();
    response = response.toObject();
    delete response.password;
    let token = (0, token_1.generateToken)({ _id: response._id });
    res.cookie("token", token, { maxAge: 48 * 60 * 60 * 1000, sameSite: "none", secure: true });
    return new AppResponse_1.default("sucesss", response, CREATED);
}));
function githubRegister(req) {
    return new Promise((resolve, reject) => {
        try {
            resolve("called");
        }
        catch (error) {
            reject({ status: BAD_REQUEST, message: error.message });
        }
    });
}
exports.githubRegister = githubRegister;
//# sourceMappingURL=index.js.map