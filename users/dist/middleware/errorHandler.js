"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../utils/AppError"));
const http_status_codes_1 = require("http-status-codes");
const errorMiddleware = (err, req, res, next) => {
    let code = err.code || 500;
    let message = err.message || "Internal Server Error";
    let success = false;
    let data = err.data || null;
    // mongodb id error
    if (err.name === "CastError") {
        const message = `Resource Not Found. Invalid: ${err.path}`;
        err = new AppError_1.default(400, message);
    }
    // mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new AppError_1.default(400, message);
    }
    // wrong jwt error
    if (err.code === "JsonWebTokenError") {
        const message = "JWT Error";
        err = new AppError_1.default(400, message);
    }
    // jwt expire error
    if (err.code === "TokenExpiredError") {
        const message = "JWT is Expired";
        err = new AppError_1.default(400, message);
    }
    res.status(code).json({
        code,
        success,
        message,
        error: (0, http_status_codes_1.getReasonPhrase)(code),
        data,
    });
};
exports.default = errorMiddleware;
//# sourceMappingURL=errorHandler.js.map