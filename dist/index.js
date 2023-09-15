"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import createError from "http-errors";
var express_1 = __importDefault(require("express"));
var path_1 = require("path");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
require("dotenv/config");
require("./database/connection");
var express_session_1 = __importDefault(require("express-session"));
var errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
var passport_1 = __importDefault(require("passport"));
require("./helper/passportAuth");
var uuid_1 = require("uuid");
var app = (0, express_1.default)();
// <<======= Routers=======>>
var index_1 = __importDefault(require("./routes/index"));
var menus_1 = __importDefault(require("./routes/menus"));
var logger_1 = __importDefault(require("./logger"));
// view engine setup
app.set("views", (0, path_1.join)(__dirname, "views"));
app.use((0, cors_1.default)({
    // origin: ["http://localhost:3000"],
    origin: true,
    // methods: "GET,PUT,POST,DELETE",
    credentials: true,
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, express_session_1.default)({
    genid: function (req) {
        return (0, uuid_1.v4)();
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // Set cookie expiration to 24 hours (in milliseconds)
    },
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static((0, path_1.join)(__dirname, "public")));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/", index_1.default);
app.use("/menu", menus_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).json({ status: 404, message: "Not Found" });
});
app.use(errorHandler_1.default);
var PORT = 3001;
app.listen(PORT, function () {
    // console.log(`\x1b[38;5;${155}mserver started at port \x1b[38;5;${33}m${PORT}\x1b[0m\x1b[0m`);
    logger_1.default.info("server started at port ".concat(PORT));
});
exports.default = app;
//# sourceMappingURL=index.js.map