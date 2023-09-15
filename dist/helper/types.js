"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = exports.MongoID = void 0;
var MongoID;
(function (MongoID) {
    MongoID["64b3a6edac403b27eed20d5c"] = "MENU";
    MongoID["MENU"] = "64b3a6edac403b27eed20d5c";
})(MongoID = exports.MongoID || (exports.MongoID = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    StatusCode[StatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCode[StatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCode[StatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["CONFLICT"] = 409] = "CONFLICT";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=types.js.map