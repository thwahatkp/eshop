"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.multerUpload = exports.isNull = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function isNull(field) {
    return field === null || field === undefined || field === "" || field === "undefined";
}
exports.isNull = isNull;
const multerUpload = (folder = "") => (0, multer_1.default)({ storage: (0, exports.storage)(folder) });
exports.multerUpload = multerUpload;
const storage = (folder) => multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = `public/uploads/${folder}`;
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileExtension = path_1.default.extname(file.originalname);
        const originalFileName = path_1.default.basename(file.originalname, fileExtension);
        const fileName = originalFileName + "-" + uniqueSuffix + fileExtension;
        cb(null, fileName);
    },
});
exports.storage = storage;
//# sourceMappingURL=global.js.map