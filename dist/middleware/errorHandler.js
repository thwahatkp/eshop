"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("../utils/AppError"));
var http_status_codes_1 = require("http-status-codes");
var errorMiddleware = function (err, req, res, next) {
    var code = err.code || 500;
    var message = err.message || "Internal Server Error";
    var success = false;
    var data = err.data || null;
    // mongodb id error
    if (err.name === "CastError") {
        var message_1 = "Resource Not Found. Invalid: ".concat(err.path);
        err = new AppError_1.default(400, message_1);
    }
    // mongoose duplicate key error
    if (err.code === 11000) {
        var message_2 = "Duplicate ".concat(Object.keys(err.keyValue), " entered");
        err = new AppError_1.default(400, message_2);
    }
    // wrong jwt error
    if (err.code === "JsonWebTokenError") {
        var message_3 = "JWT Error";
        err = new AppError_1.default(400, message_3);
    }
    // jwt expire error
    if (err.code === "TokenExpiredError") {
        var message_4 = "JWT is Expired";
        err = new AppError_1.default(400, message_4);
    }
    res.status(code).json({
        code: code,
        success: success,
        message: message,
        error: (0, http_status_codes_1.getReasonPhrase)(code),
        data: data,
    });
};
exports.default = errorMiddleware;
//# sourceMappingURL=errorHandler.js.map