"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(code, message, data) {
        super(message);
        this.code = code;
        this.data = data;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = AppError;
//# sourceMappingURL=AppError.js.map