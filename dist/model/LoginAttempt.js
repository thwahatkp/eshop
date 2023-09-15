"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var moment_1 = __importDefault(require("moment"));
var LoginAttemptSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    ip: String,
    date: { type: String, default: function () { return (0, moment_1.default)().format("YYYY-MM-DD"); } },
    time: { type: String, default: function () { return (0, moment_1.default)().format("hh:mm:ss"); } },
    loginAttempts: { type: Number, default: 0 },
    blockedUntil: { type: String },
}, {
    timestamps: true,
    collection: "LoginAttempt",
});
var LoginAttempt = mongoose_1.default.model("LoginAttempt", LoginAttemptSchema);
exports.default = LoginAttempt;
//# sourceMappingURL=LoginAttempt.js.map