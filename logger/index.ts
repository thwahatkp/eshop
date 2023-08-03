import { format, createLogger, transports } from "winston";
import moment from "moment";

// Formatter with colorization for console output
const consoleFormat = format.combine(
  format.colorize({ all: true }),
  format.timestamp(),
  format.printf(({ timestamp, level, message }) => {
    return `${moment(timestamp).format("DD-MM-YYYY hh:mm a")} [${level}]: ${message}`;
  })
);

// Formatter without colorization for file output
const fileFormat = format.combine(
  format.timestamp(),
  format.printf(({ timestamp, level, message }) => {
    return `${moment(timestamp).format("YYYY-MM-DDTHH:mm:ss.SSSZ")} [${level.toUpperCase()}]: ${message}`;
  })
);

// Create logger instance
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
    new transports.File({
      level: "info",
      filename: "logs/app.log",
      format: fileFormat,
    }),
  ],
});

export default logger;
