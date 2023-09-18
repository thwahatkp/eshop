import { Schema, model } from "mongoose";

interface Slider extends Document {
  status?: number;
  title: string;
  img: string;
  link?: string;
  btn_name: string;
  description: string;
}

let schema = new Schema<Slider>(
  {
    status: { type: Number, default: 0 },
    title: String,
    img: String,
    btn_name: String,
    link: String,
    description: String,
  },
  { timestamps: true }
);

const Slider = model<Slider>("slider", schema);

export default Slider;
