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
const token_1 = require("./token");
let auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.cookies.token || req.session.token;
        if (req.isAuthenticated()) {
            return next();
        }
        if (!!token) {
            let response = (0, token_1.verifyToken)(token);
            if (response === "TokenExpiredError") {
                return res
                    .status(401)
                    .json({ status: false, message: "token expired" });
            }
            if (response === "JsonWebTokenError" || response === "SyntaxError") {
                return res
                    .status(401)
                    .json({ status: false, message: "please provide a valid token" });
            }
            let user = yield model_1.default.Users.findById(response._id).select("-password -__v -createdAt -updatedAt");
            req.user = user;
            next();
        }
        else {
            return res
                .status(401)
                .json({ status: false, message: "Please provide a token" });
        }
    }
    catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
});
exports.auth = auth;
// function ensureAuthenticated(req: any, res: any, next: any) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   // res.redirect("http://localhost:3000/login");
//   res.status(401).json({
//     success: false,
//     message: "please login first",
//   });
// }
//# sourceMappingURL=authMiddleware.js.map