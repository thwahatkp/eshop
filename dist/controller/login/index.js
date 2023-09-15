"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("../../auth/token");
var model_1 = require("../../model");
var global_1 = require("../../helper/global");
var moment_1 = __importDefault(require("moment"));
var types_1 = require("../../helper/types");
var tryCatch_1 = __importDefault(require("../../middleware/tryCatch"));
var AppError_1 = __importDefault(require("../../utils/AppError"));
var AppResponse_1 = __importDefault(require("../../utils/AppResponse"));
var OK = types_1.StatusCode.OK, BAD_REQUEST = types_1.StatusCode.BAD_REQUEST, FORBIDDEN = types_1.StatusCode.FORBIDDEN, UNAUTHORIZED = types_1.StatusCode.UNAUTHORIZED, NOT_FOUND = types_1.StatusCode.NOT_FOUND;
var loginUser = (0, tryCatch_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, search, user, blockedUser, remainingTime, pass, token, blockedUser_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                if ((0, global_1.isNull)(username))
                    throw new AppError_1.default(BAD_REQUEST, "Please provide a username");
                if ((0, global_1.isNull)(password))
                    throw new AppError_1.default(BAD_REQUEST, "Please provide a password");
                search = { username: username };
                // <<======= checking username is mobile no =======>>
                if (!isNaN(username)) {
                    username = parseInt(username);
                    search = { mobile: username };
                }
                return [4 /*yield*/, model_1.Users.findOne({
                        $or: [search, { email: username }],
                    }).select("-__v -createdAt -updatedAt")];
            case 1:
                user = _b.sent();
                if (!user) return [3 /*break*/, 13];
                return [4 /*yield*/, model_1.LoginAttempt.findOne({ username: user === null || user === void 0 ? void 0 : user.username })];
            case 2:
                blockedUser = _b.sent();
                if (!blockedUser) return [3 /*break*/, 3];
                if (blockedUser && blockedUser.blockedUntil && (0, moment_1.default)(blockedUser === null || blockedUser === void 0 ? void 0 : blockedUser.blockedUntil).isAfter((0, moment_1.default)())) {
                    remainingTime = (0, moment_1.default)(blockedUser.blockedUntil).format("DD-MM-YY hh:mm a ");
                    // const remainingTime = moment(blockedUser.blockedUntil).diff(moment(), 'seconds');
                    // const formattedTime = moment.utc(remainingTime * 1000).format('LT') // Format as mm:ss
                    // const formattedTime = moment.utc(remainingTime * 1000); // Format as mm:ss
                    throw new AppError_1.default(FORBIDDEN, "Your account is blocked. Please try again after ".concat(remainingTime, "."));
                }
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, new model_1.LoginAttempt({ ip: req.ip, username: username }).save()];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                pass = user.validatePassword(password, user.password);
                if (!pass) return [3 /*break*/, 8];
                if (!blockedUser) return [3 /*break*/, 7];
                blockedUser.loginAttempts = 0;
                return [4 /*yield*/, blockedUser.save()];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7:
                user = user.toObject();
                delete user.password;
                delete user.date;
                delete user.time;
                token = (0, token_1.generateToken)({ _id: user._id });
                res.cookie("token", token, { maxAge: 48 * 60 * 60 * 1000 });
                return [2 /*return*/, new AppResponse_1.default("success", user, OK)];
            case 8:
                if (!blockedUser) return [3 /*break*/, 10];
                blockedUser.loginAttempts++;
                if (blockedUser.loginAttempts === 3) {
                    blockedUser.blockedUntil = (0, moment_1.default)().add(15, "minutes").format();
                    // blockedUser.blockedUntil = moment().add(15, 'minutes').toDate(); // <<======= 15 minutes block  =======>>
                }
                else if (blockedUser.loginAttempts === 6) {
                    blockedUser.blockedUntil = (0, moment_1.default)().add(30, "minutes").format();
                }
                else if (blockedUser.loginAttempts === 9) {
                    blockedUser.blockedUntil = (0, moment_1.default)().add(1, "hours").format();
                }
                else if (blockedUser.loginAttempts === 12) {
                    blockedUser.blockedUntil = (0, moment_1.default)().add(12, "hours").format();
                }
                blockedUser.date = (0, moment_1.default)().format("YYYY-MM-DD");
                blockedUser.time = (0, moment_1.default)().format("hh:mm:ss");
                return [4 /*yield*/, blockedUser.save()];
            case 9:
                _b.sent();
                return [3 /*break*/, 11];
            case 10:
                blockedUser_1 = new model_1.LoginAttempt({
                    ip: req.ip,
                    username: username,
                }).save();
                _b.label = 11;
            case 11: throw new AppError_1.default(UNAUTHORIZED, "Password is incorrect");
            case 12: return [3 /*break*/, 14];
            case 13: throw new AppError_1.default(NOT_FOUND, "No account exits");
            case 14: return [2 /*return*/];
        }
    });
}); });
exports.default = loginUser;
//# sourceMappingURL=index.js.map