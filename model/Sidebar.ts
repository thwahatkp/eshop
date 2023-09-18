import { Schema, model } from "mongoose";

interface SideBar extends Document {
  status: string;
  name: string;
  order: number;
  icon: string;
}

let schema = new Schema<SideBar>({
  status: String,
  name: String,
  order: Number,
  icon: String,
});

const SideBar = model<SideBar>("sidebar", schema);

export default SideBar;
