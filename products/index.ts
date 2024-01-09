// import createError from "http-errors";
import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import loggers from "morgan";
import cors from "cors";
import "dotenv/config";
import errorMiddleware from "./middleware/errorHandler";
import { v4 as uuidv4 } from "uuid";
import session from "express-session";
import logger from "./logger";
import { PORT, SESSION_SECRET } from "./config";

import connectDB from "./database/connection";
import { subscribeMessage } from "./utils";

var app = express();

// <<======= Routers=======>>
import indexRouter from "./routes/index";
import slider from "./routes/slider.router";
import category from "./routes/category.router";

// view engine setup
app.set("views", join(__dirname, "views"));

app.use(
  cors({
    // origin: ["http://localhost:3000", "https://thwahatkp.github.io/eshop", "https://thwahatkp.github.io"],
    // methods: "GET,PUT,POST,DELETE",
    origin: true,
    credentials: true,
  })
);
app.use(
  session({
    genid: (req) => {
      return uuidv4();
    },
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: "none", // This is where you specify SameSite=None
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // Set cookie expiration to 24 hours (in milliseconds)
    },
  })
);

app.use(loggers("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use(express.json());

app.use("/", indexRouter);
app.use("/slider", slider);
app.use("/category", category);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ status: 404, message: "Not Found", method: req.method, url: req.url });
});

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(PORT, () => {
    // console.log(`\x1b[38;5;${155}mserver started at port \x1b[38;5;${33}m${PORT}\x1b[0m\x1b[0m`);
    subscribeMessage("eshop-products", ["user_service"]);
    console.log(`product service listening on port ${PORT}`);
    // logger.info(`server started at port ${PORT}`);
  });
});

export default app;
