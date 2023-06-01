import mongoose, { Document, Schema } from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

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
  token?: string;
  generatePasswordHash(password: string): string;
  validatePassword(password: string, hashedPassword: string): boolean;
}

const userSchema = new Schema<User>(
  {
    ip: String,
    fname: String,
    lname: String,
    username: String,
    mobile: Number,
    email: String,
    password: String,
    date: String,
    time: String,
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

userSchema.methods.generatePasswordHash = function (password: string): string {
  const saltRounds = 10;
  const salt = genSaltSync(saltRounds);
  const hash = hashSync(password, salt);
  return hash;
};

userSchema.methods.validatePassword = function (
  password: string,
  hashedPassword: string
): boolean {
  return compareSync(password, hashedPassword);
};

export const Users = mongoose.model<User>('users', userSchema);
