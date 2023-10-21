"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Slider_1 = __importDefault(require("./Slider"));
const LoginAttempt_1 = __importDefault(require("./LoginAttempt"));
const Menus_1 = __importDefault(require("./Menus"));
const Product_1 = __importDefault(require("./Product"));
const UserToken_1 = __importDefault(require("./UserToken"));
const Users_1 = __importDefault(require("./Users"));
exports.default = {
    Users: Users_1.default,
    Slider: Slider_1.default,
    LoginAttempt: LoginAttempt_1.default,
    Menus: Menus_1.default,
    Product: Product_1.default,
    UserToken: UserToken_1.default,
};
//# sourceMappingURL=index.js.map