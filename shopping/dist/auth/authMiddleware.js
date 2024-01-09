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
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const token_1 = require("./token");
let auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = req.cookies.token || req.session.token;
        if (req.isAuthenticated()) {
            return next();
        }
        if (!!token) {
            let response = (0, token_1.verifyToken)(token);
            console.log(response);
            if (response === "TokenExpiredError") {
                return res.status(401).json({ status: false, message: "token expired" });
            }
            if (response === "JsonWebTokenError" || response === "SyntaxError") {
                return res.status(401).json({ status: false, message: "please provide a valid token" });
            }
            req.user = response;
            next();
        }
        else {
            return res.status(401).json({ status: false, message: "Please provide a token" });
        }
    }
    catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
});
exports.auth = auth;
//# sourceMappingURL=authMiddleware.js.map