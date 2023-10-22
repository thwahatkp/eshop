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
const types_1 = require("../../helper/types");
const tryCatch_1 = __importDefault(require("../../middleware/tryCatch"));
const AppError_1 = __importDefault(require("../../utils/AppError"));
const AppResponse_1 = __importDefault(require("../../utils/AppResponse"));
const token_1 = require("../../auth/token");
const jsonwebtoken_1 = require("jsonwebtoken");
const refreshToken = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.body;
    return (0, token_1.verifyRefreshToken)(refreshToken)
        .then((data) => {
        const accessToken = (0, jsonwebtoken_1.sign)({ _id: data.tokenDetails._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
        res.cookie("token", accessToken, { maxAge: 15000, sameSite: "none", secure: true });
        return new AppResponse_1.default("success", { accessToken }, types_1.StatusCode.OK);
    })
        .catch((err) => {
        throw new AppError_1.default(types_1.StatusCode.FORBIDDEN, err.message);
    });
}));
exports.default = refreshToken;
//# sourceMappingURL=refreshToken.controller.js.map