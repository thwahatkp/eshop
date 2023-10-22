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
exports.verifyRefreshToken = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const jsonwebtoken_2 = __importDefault(require("jsonwebtoken"));
const model_1 = __importDefault(require("../model"));
const generateToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = { _id: user._id };
        const accessToken = jsonwebtoken_2.default.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
        const refreshToken = jsonwebtoken_2.default.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30d" });
        const userToken = yield model_1.default.UserToken.findOne({ userId: user._id });
        if (userToken)
            yield userToken.deleteOne();
        yield new model_1.default.UserToken({ userId: user._id, token: refreshToken }).save();
        return Promise.resolve({ accessToken, refreshToken });
    }
    catch (err) {
        return Promise.reject(err);
    }
});
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        let response = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_TOKEN_SECRET);
        return response;
    }
    catch (error) {
        return error.name;
    }
};
exports.verifyToken = verifyToken;
const verifyRefreshToken = (refreshToken) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const doc = yield model_1.default.UserToken.findOne({ token: refreshToken });
        if (!doc)
            return reject({ success: false, message: "Invalid refresh token" });
        (0, jsonwebtoken_1.verify)(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, tokenDetails) => {
            if (err)
                return reject({ success: false, message: "Invalid refresh token" });
            resolve({
                tokenDetails,
                success: true,
                message: "Valid refresh token",
            });
        });
    }));
};
exports.verifyRefreshToken = verifyRefreshToken;
//# sourceMappingURL=token.js.map