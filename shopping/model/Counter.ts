import mongoose, { Schema, model } from "mongoose";

interface CounterType {
  _id: string;
  value: Number;
}

const schema = new Schema<CounterType>(
  {
    _id: { type: String, required: true },
    value: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const Counter = model<CounterType>("Counter", schema);

export default Counter;
