import { Schema, model } from "mongoose";

let menusSchema = new Schema(
  {
    categories: [
      {
        name: String,
        img: String,
        url: String,
        order: Number,
      },
    ],
    main_menus: [
      {
        name: String,
        icon: String,
        order: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Menus = model("Menus", menusSchema);

export default Menus;
