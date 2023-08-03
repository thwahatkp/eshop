import mongoose, { Document, Schema } from "mongoose";
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
import moment from "moment";

interface User extends Document {
  ip?: string;
  fname?: string;
  lname?: string;
  username?: string;
  mobile?: number;
  email?: string;
  password?: string;
  date?: string;
  time?: string;
  googleId?: string;
  avatar?: string;
  token?: string;
  generatePasswordHash(password: string): string;
  validatePassword(password: string, hashedPassword: string): boolean;
}

const userSchema = new Schema<User>(
  {
    ip: String,
    fname: { type: String, required: true },
    lname: String,
    username: { type: String },
    mobile: Number,
    email: { type: String, required: true },
    password: String,
    date: { type: String, default: () => moment().format("YYYY-MM-DD") },
    time: { type: String, default: () => moment().format("hh:mm:ss") },
    avatar: String,
    googleId: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

userSchema.methods.generatePasswordHash = function (password: string): string {
  const saltRounds = 10;
  const salt = genSaltSync(saltRounds);
  const hash = hashSync(password, salt);
  return hash;
};

userSchema.methods.validatePassword = function (password: string, hashedPassword: string): boolean {
  return compareSync(password, hashedPassword);
};

const Users = mongoose.model<User>("users", userSchema);
export default Users;
