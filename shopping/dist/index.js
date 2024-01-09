"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import createError from "http-errors";
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const passport_1 = __importDefault(require("passport"));
const uuid_1 = require("uuid");
const express_session_1 = __importDefault(require("express-session"));
const connection_1 = __importDefault(require("./database/connection"));
var app = (0, express_1.default)();
// <<======= Routers=======>>
const index_1 = __importDefault(require("./routes/index"));
const config_1 = require("./config");
// view engine setup
app.set("views", (0, path_1.join)(__dirname, "views"));
app.use((0, cors_1.default)({
    // origin: ["http://localhost:3000", "https://thwahatkp.github.io/eshop", "https://thwahatkp.github.io"],
    // methods: "GET,PUT,POST,DELETE",
    origin: true,
    credentials: true,
}));
app.use((0, express_session_1.default)({
    genid: (req) => {
        return (0, uuid_1.v4)();
    },
    secret: config_1.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: "none",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000, // Set cookie expiration to 24 hours (in milliseconds)
    },
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static((0, path_1.join)(__dirname, "public")));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/", index_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).json({ status: 404, message: "Not Found", method: req.method, url: req.url });
});
app.use(errorHandler_1.default);
(0, connection_1.default)().then(() => {
    app.listen(config_1.PORT, () => {
        // console.log(`\x1b[38;5;${155}mserver started at port \x1b[38;5;${33}m${PORT}\x1b[0m\x1b[0m`);
        console.log(`product service listening on port ${config_1.PORT}`);
        // logger.info(`server started at port ${PORT}`);
    });
});
exports.default = app;
//# sourceMappingURL=index.js.map