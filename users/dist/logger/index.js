"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const moment_1 = __importDefault(require("moment"));
const config_1 = require("../config");
let dir = config_1.LOG_DIR || "logs";
// if (!dir) dir = resolve("logs");
// create directory if it is not present
// if (!fs.existsSync(dir)) {
//   // Create the directory if it does not exist
//   fs.mkdirSync(dir);
// }
// Formatter with colorization for console output
const consoleFormat = winston_1.format.combine(winston_1.format.colorize({ all: true }), winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
    return `${(0, moment_1.default)(timestamp).format("DD-MM-YYYY hh:mm a")} [${level}]: ${message}`;
}));
// Create a function to determine the log file based on log level
const logFile = (level) => {
    return `logs/${level}.log`;
};
const fileFormat = winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
    return `${(0, moment_1.default)(timestamp).format("YYYY-MM-DDTHH:mm:ss.SSSZ")} [${level.toUpperCase()}]: ${message}`;
}));
const logger = (0, winston_1.createLogger)({
    level: "debug",
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
        return `${(0, moment_1.default)(timestamp).format("YYYY-MM-DDTHH:mm:ss.SSSZ")} [${level.toUpperCase()}]: ${message}`;
    })),
    // transports: [
    //   new transports.Console({ format: consoleFormat }),
    //   new DailyRotateFile({
    //     level: "info",
    //     filename: logFile("app.%DATE%"),
    //     format: fileFormat,
    //     datePattern: "YYYY-MM-DD",
    //     maxFiles: "10d",
    //   }),
    //   new DailyRotateFile({
    //     level: "error",
    //     filename: logFile("error.%DATE%"),
    //     format: fileFormat,
    //     datePattern: "YYYY-MM-DD",
    //     maxFiles: "10d",
    //   }),
    // ],
});
exports.default = logger;
//# sourceMappingURL=index.js.map