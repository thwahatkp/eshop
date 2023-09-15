"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    status: String,
    name: String,
    order: Number,
    icon: String
});
var SideBar = (0, mongoose_1.model)("sidebar", schema);
exports.default = SideBar;
//# sourceMappingURL=Sidebar.js.map