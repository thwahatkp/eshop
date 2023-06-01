// import createError from "http-errors";
import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import 'dotenv/config'
import "./database/connection";

import indexRouter from "./routes/index";

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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(req);
  res.status(404).json({ status: 404, message: "route not found" });
});

let PORT = 3001;
//  155 118
app.listen(PORT, () => {
  console.log(
    `\x1b[38;5;${155}mserver started at port \x1b[38;5;${33}m${PORT}\x1b[0m\x1b[0m`
  );
});

export default app;
