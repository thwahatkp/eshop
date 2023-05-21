var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

require("dotenv").config();
require("./database/connection");

var indexRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));

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
app.use(express.static(path.join(__dirname, "public")));

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

module.exports = app;
