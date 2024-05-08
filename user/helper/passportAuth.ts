import passport from "passport";
import models from "../model";
import moment from "moment";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_ID_SECRET } from "../config";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_ID_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken: any, refreshToken: any, profile: any, done: Function) => {
      let googleUser = await models.Users.findOneAndUpdate(
        { googleId: profile.id },
        {
          $set: {
            googleId: profile.id,
            fname: profile.name.givenName,
            lname: profile.name.familyName,
            username: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            date: moment().format("YYYY-MM-DD"),
            time: moment().format("hh:mm:ss"),
          },
        },
        {
          new: true,
          upsert: true,
        }
      );
      const user = {
        id: profile.id,
        fullName: profile.displayName,
        name: profile.name,
        email: profile.emails[0].value,
        photos: profile.photos[0].value,
        provider: profile.provider,
      };
      done(null, googleUser);
    }
  )
);
passport.serializeUser((user: any, done: any) => {
  //   console.log(user, "**");
  done(null, user._id);
});

passport.deserializeUser(async (user: any, done: any) => {
  //   done(null, user);
  let details = await models.Users.findById(user).select("-googleId -__v -createdAt -updatedAt");

  done(null, details);
});
