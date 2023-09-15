"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
let generateToken = (data) => {
    if (typeof data === "object") {
        if (Object.keys(data).length === 0)
            return "object is null";
        // let token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: 60 });
        let token = (0, jsonwebtoken_1.sign)(data, process.env.JWT_SECRET, { expiresIn: "2 days" });
        return token;
    }
    else {
        return "parameter must be object";
    }
};
exports.generateToken = generateToken;
let verifyToken = (token) => {
    try {
        let response = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        return response;
    }
    catch (error) {
        return error.name;
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token.js.map