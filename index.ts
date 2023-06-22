// import createError from "http-errors";
import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import "dotenv/config";
import "./database/connection";
import session from "express-session";
import indexRouter from "./routes/index";
import errorMiddleware from "./middleware/errorHandler";
import passport from "passport";
import "./helper/passportAuth";
import { v4 as uuidv4 } from "uuid";

var app = express();

// view engine setup
app.set("views", join(__dirname, "views"));

app.use(
  cors({
    // origin: ["http://localhost:3000"],
    origin: true,
    // methods: "GET,PUT,POST,DELETE",
    credentials: true,
  })
);

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    genid: (req) => {
      return uuidv4();
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // Set cookie expiration to 24 hours (in milliseconds)
    },
  })
);
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ status: 404, message: "Not Found" });
});

app.use(errorMiddleware);

let PORT = 3001;
app.listen(PORT, () => {
  console.log(
    `\x1b[38;5;${155}mserver started at port \x1b[38;5;${33}m${PORT}\x1b[0m\x1b[0m`
  );
});

export default app;
