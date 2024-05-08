"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let menusSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
const Menus = (0, mongoose_1.model)("Menus", menusSchema);
exports.default = Menus;
//# sourceMappingURL=Menus.js.map