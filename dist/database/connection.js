"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logger_1 = __importDefault(require("../logger"));
// connect("mongodb://127.0.0.1:27017/eshop-db")
const connectDB = () => {
    return new Promise((resolve, reject) => {
        (0, mongoose_1.connect)(process.env.DB_URL)
            .then((res) => {
            console.log("database connected successfully");
            // logger.info("database connected successfully");
            resolve("");
        })
            .catch((err) => logger_1.default.error(err.message));
    });
};
exports.default = connectDB;
//# sourceMappingURL=connection.js.map