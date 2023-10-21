"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    status: { type: Number, default: 0 },
    title: String,
    img: String,
    btn_name: String,
    link: String,
    description: String,
}, { timestamps: true });
const Slider = (0, mongoose_1.model)("slider", schema);
exports.default = Slider;
//# sourceMappingURL=Slider.js.map