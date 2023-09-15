"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var moment_1 = __importDefault(require("moment"));
var winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var dir = process.env.LOG_DIR;
if (!dir)
    dir = (0, path_1.resolve)("logs");
// create directory if it is not present
if (!fs_1.default.existsSync(dir)) {
    // Create the directory if it does not exist
    fs_1.default.mkdirSync(dir);
}
// Formatter with colorization for console output
var consoleFormat = winston_1.format.combine(winston_1.format.colorize({ all: true }), winston_1.format.timestamp(), winston_1.format.printf(function (_a) {
    var timestamp = _a.timestamp, level = _a.level, message = _a.message;
    return "".concat((0, moment_1.default)(timestamp).format("DD-MM-YYYY hh:mm a"), " [").concat(level, "]: ").concat(message);
}));
// Create a function to determine the log file based on log level
var logFile = function (level) {
    return "logs/".concat(level, ".log");
};
var fileFormat = winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(function (_a) {
    var timestamp = _a.timestamp, level = _a.level, message = _a.message;
    return "".concat((0, moment_1.default)(timestamp).format("YYYY-MM-DDTHH:mm:ss.SSSZ"), " [").concat(level.toUpperCase(), "]: ").concat(message);
}));
var logger = (0, winston_1.createLogger)({
    level: "debug",
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(function (_a) {
        var timestamp = _a.timestamp, level = _a.level, message = _a.message;
        return "".concat((0, moment_1.default)(timestamp).format("YYYY-MM-DDTHH:mm:ss.SSSZ"), " [").concat(level.toUpperCase(), "]: ").concat(message);
    })),
    transports: [
        new winston_1.transports.Console({ format: consoleFormat }),
        new winston_daily_rotate_file_1.default({
            level: "info",
            filename: logFile("app.%DATE%"),
            format: fileFormat,
            datePattern: "YYYY-MM-DD",
            maxFiles: "10d",
        }),
        new winston_daily_rotate_file_1.default({
            level: "error",
            filename: logFile("error.%DATE%"),
            format: fileFormat,
            datePattern: "YYYY-MM-DD",
            maxFiles: "10d",
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=index.js.map