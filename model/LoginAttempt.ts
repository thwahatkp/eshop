import mongoose,{ Document, Schema } from "mongoose";
import moment, { Moment } from "moment";

interface LoginAttempt extends Document {
  username: string;
  ip?: string;
  date?: string;
  time?:string;
  loginAttempts?: number;
  blockedUntil?: any,
}
const LoginAttemptSchema = new Schema<LoginAttempt>(
  {
    username: { type: String, required: true, unique: true },
    ip: String,
    date: { type: String, default: () => moment().format("YYYY-MM-DD") },
    time: { type: String, default: () => moment().format("hh:mm:ss") },
    loginAttempts: { type: Number, default: 0 },
    blockedUntil: { type: String },
  },
  {
    timestamps: true,
    collection: "LoginAttempt",
  }
);

const LoginAttempt = mongoose.model<LoginAttempt>("LoginAttempt", LoginAttemptSchema);

export default LoginAttempt;
