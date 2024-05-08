"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logger_1 = __importDefault(require("../logger"));
const config_1 = require("../config");
if (!config_1.PORT)
    throw new Error("Port required");
if (!config_1.ACCESS_TOKEN_SECRET)
    throw new Error("Access token secret required");
if (!config_1.REFRESH_TOKEN_SECRET)
    throw new Error("Refresh token secret required");
if (!config_1.DB_URL)
    throw new Error("Databse url required");
// connect("mongodb://127.0.0.1:27017/eshop-db")
const connectDB = () => {
    return new Promise((resolve, reject) => {
        (0, mongoose_1.connect)(config_1.DB_URL)
            .then(() => {
            console.log("database connected successfully");
            // logger.info("database connected successfully");
            resolve("");
        })
            .catch((err) => logger_1.default.error(err.message));
    });
};
exports.default = connectDB;
//# sourceMappingURL=connection.js.map