import { Schema, model } from "mongoose"

let schema = new Schema({
    status: String,
    name: String,
    order: Number,
    icon: String
})

const SideBar = model("sidebar", schema)

export default SideBar