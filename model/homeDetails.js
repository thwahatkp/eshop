import mongoose from "mongoose";
let Schema = mongoose.Schema;

let homeSchema = new Schema(
  {
    title: String,
    description1: String,
    description2: String,
  },
  { timestamps: true, collection: "home-details" }
);

export let homeDetails = mongoose.model("home-details", homeSchema);
