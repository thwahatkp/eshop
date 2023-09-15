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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const models = __importStar(require("../model/index"));
const moment_1 = __importDefault(require("moment"));
const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_ID_SECRET,
    callbackURL: "/auth/google/callback",
}, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    let googleUser = yield models.Users.findOneAndUpdate({ googleId: profile.id }, {
        $set: {
            googleId: profile.id,
            fname: profile.name.givenName,
            lname: profile.name.familyName,
            username: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            date: (0, moment_1.default)().format("YYYY-MM-DD"),
            time: (0, moment_1.default)().format("hh:mm:ss"),
        },
    }, {
        new: true,
        upsert: true,
    });
    const user = {
        id: profile.id,
        fullName: profile.displayName,
        name: profile.name,
        email: profile.emails[0].value,
        photos: profile.photos[0].value,
        provider: profile.provider,
    };
    done(null, googleUser);
})));
passport_1.default.serializeUser((user, done) => {
    //   console.log(user, "**");
    done(null, user._id);
});
passport_1.default.deserializeUser((user, done) => __awaiter(void 0, void 0, void 0, function* () {
    //   done(null, user);
    let details = yield models.Users.findById(user).select("-googleId -__v -createdAt -updatedAt");
    done(null, details);
}));
//# sourceMappingURL=passportAuth.js.map