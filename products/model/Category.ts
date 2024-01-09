import mongoose, { Schema, model } from "mongoose";

interface CategoryType {
  name: string;
  order: number;
  img: string;
  url: string;
}

const schema = new Schema<CategoryType>(
  {
    name: { type: String, required: true },
    order: Number,
    img: String,
    url: String,
  },
  { timestamps: true }
);

const Category = model<CategoryType>("Category", schema);

export default Category;
