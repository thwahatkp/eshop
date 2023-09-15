"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.multerUpload = exports.isNull = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
function isNull(field) {
    return field === null || field === undefined || field === "" || field === "undefined";
}
exports.isNull = isNull;
var multerUpload = function (folder) {
    if (folder === void 0) { folder = ""; }
    return (0, multer_1.default)({ storage: (0, exports.storage)(folder) });
};
exports.multerUpload = multerUpload;
var storage = function (folder) {
    return multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            var uploadPath = "public/uploads/".concat(folder);
            fs_1.default.mkdirSync(uploadPath, { recursive: true });
            cb(null, uploadPath);
        },
        filename: function (req, file, cb) {
            var uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            var fileExtension = path_1.default.extname(file.originalname);
            var originalFileName = path_1.default.basename(file.originalname, fileExtension);
            var fileName = originalFileName + "-" + uniqueSuffix + fileExtension;
            cb(null, fileName);
        },
    });
};
exports.storage = storage;
//# sourceMappingURL=global.js.map