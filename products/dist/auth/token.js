"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const verifyToken = (token) => {
    try {
        let response = (0, jsonwebtoken_1.verify)(token, config_1.ACCESS_TOKEN_SECRET);
        return response;
    }
    catch (error) {
        return error.name;
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token.js.map