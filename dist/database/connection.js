"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var logger_1 = __importDefault(require("../logger"));
// connect("mongodb://127.0.0.1:27017/eshop-db")
// connect(process.env.DB_URL)
(0, mongoose_1.connect)("mongodb+srv://thwahatkp:6238583014@cluster0.jm1dir3.mongodb.net/eshop-db?retryWrites=true&w=majority")
    .then(function (res) {
    logger_1.default.info("database connected successfully");
})
    .catch(function (err) { return logger_1.default.error(err.message); });
//# sourceMappingURL=connection.js.map