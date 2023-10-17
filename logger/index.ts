import { format, createLogger, transports } from "winston";
import moment from "moment";
import DailyRotateFile from "winston-daily-rotate-file";

import fs from "fs";
import { resolve } from "path";

let dir = process.env.LOG_DIR;
// if (!dir) dir = resolve("logs");

// create directory if it is not present
// if (!fs.existsSync(dir)) {
//   // Create the directory if it does not exist
//   fs.mkdirSync(dir);
// }

// Formatter with colorization for console output
const consoleFormat = format.combine(
  format.colorize({ all: true }),
  format.timestamp(),
  format.printf(({ timestamp, level, message }) => {
    return `${moment(timestamp).format("DD-MM-YYYY hh:mm a")} [${level}]: ${message}`;
  })
);

// Create a function to determine the log file based on log level
const logFile = (level: string) => {
  return `logs/${level}.log`;
};

const fileFormat = format.combine(
  format.timestamp(),
  format.printf(({ timestamp, level, message }) => {
    return `${moment(timestamp).format("YYYY-MM-DDTHH:mm:ss.SSSZ")} [${level.toUpperCase()}]: ${message}`;
  })
);

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${moment(timestamp).format("YYYY-MM-DDTHH:mm:ss.SSSZ")} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console({ format: consoleFormat }),
    new DailyRotateFile({
      level: "info",
      filename: logFile("app.%DATE%"),
      format: fileFormat,
      datePattern: "YYYY-MM-DD",
      maxFiles: "10d",
    }),
    new DailyRotateFile({
      level: "error",
      filename: logFile("error.%DATE%"),
      format: fileFormat,
      datePattern: "YYYY-MM-DD",
      maxFiles: "10d",
    }),
  ],
});

export default logger;
