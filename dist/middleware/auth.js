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
exports.auth = void 0;
const model_1 = __importDefault(require("../model"));
const token_1 = require("../auth/token");
const tryCatch_1 = __importDefault(require("./tryCatch"));
const AppError_1 = __importDefault(require("../utils/AppError"));
// import AppResponse from "../utils/AppResponse";
let auth = (0, tryCatch_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = req.cookies.token;
    if (!!token) {
        let response = (0, token_1.verifyToken)(token);
        if (response === "TokenExpiredError") {
            throw new AppError_1.default(401, "token expired");
        }
        if (response === "JsonWebTokenError" || response === "SyntaxError") {
            throw new AppError_1.default(401, "please provide a valid token");
        }
        let user = yield model_1.default.Users.findById(response._id).select("-password -__v -createdAt -updatedAt");
        req.user = user;
        next();
    }
    else {
        throw new AppError_1.default(401, "please provide a token");
    }
}));
const _auth = auth;
exports.auth = _auth;
//# sourceMappingURL=auth.js.map