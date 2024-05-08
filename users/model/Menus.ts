import { Schema, model } from "mongoose";

let menusSchema = new Schema(
  {
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
