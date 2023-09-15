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
const AppResponse_1 = __importDefault(require("../utils/AppResponse"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const http_status_codes_1 = require("http-status-codes");
const global_1 = require("../helper/global");
const tryCatch = (errFunction) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield errFunction(req, res, next);
        if (result instanceof AppResponse_1.default) {
            ResponseHandler(res, result);
        }
        else {
            next(new AppError_1.default(500, "Invalid Response. Expected Response object."));
        }
        return;
    }
    catch (error) {
        return next(error);
    }
});
const ResponseHandler = (res, result) => {
    const response = {
        code: result.statusCode,
        success: true,
        status: (0, http_status_codes_1.getReasonPhrase)(result.statusCode),
    };
    if (!(0, global_1.isNull)(result.message)) {
        response.message = result.message;
    }
    if (!(0, global_1.isNull)(result.data)) {
        response.data = result.data;
    }
    res.status(result.statusCode).json(response);
};
exports.default = tryCatch;
//# sourceMappingURL=tryCatch.js.map