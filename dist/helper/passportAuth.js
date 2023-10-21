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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const model_1 = __importDefault(require("../model"));
const moment_1 = __importDefault(require("moment"));
const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_ID_SECRET,
    callbackURL: "/auth/google/callback",
}, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    let googleUser = yield model_1.default.Users.findOneAndUpdate({ googleId: profile.id }, {
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
    let details = yield model_1.default.Users.findById(user).select("-googleId -__v -createdAt -updatedAt");
    done(null, details);
}));
//# sourceMappingURL=passportAuth.js.map