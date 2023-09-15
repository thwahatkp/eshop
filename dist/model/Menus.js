"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var menusSchema = new mongoose_1.Schema({
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
var Menus = (0, mongoose_1.model)("Menus", menusSchema);
exports.default = Menus;
//# sourceMappingURL=Menus.js.map