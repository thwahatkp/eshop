"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategory = exports.addCategory = void 0;
const global_1 = require("../helper/global");
const model_1 = __importDefault(require("../model"));
const types_1 = require("../helper/types");
const tryCatch_1 = __importDefault(require("../middleware/tryCatch"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const AppResponse_1 = __importDefault(require("../utils/AppResponse"));
const { OK, BAD_REQUEST, CREATED } = types_1.StatusCode;
exports.addCategory = (0, tryCatch_1.default)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, url, order } = req.body;
    if ((0, global_1.isNull)(name) || (0, global_1.isNull)(url) || (0, global_1.isNull)(order)) {
        throw new AppError_1.default(BAD_REQUEST, "Please provide a required fields");
    }
    const img = req.file.path.replace("public/", "");
    const category = yield model_1.default.Menus.findOneAndUpdate({}, {
        $push: {
            categories: [
                {
                    name,
                    url,
                    img,
                    order,
                },
            ],
        },
    }, { upsert: true });
    return new AppResponse_1.default("success", { data: category }, OK);
}));
exports.listCategory = (0, tryCatch_1.default)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const categorie = yield model_1.default.Menus.aggregate([
        {
            $project: {
                categories: 1,
            },
        },
        {
            $addFields: {
                categories: {
                    $sortArray: {
                        input: "$categories",
                        sortBy: { order: 1 },
                    },
                },
            },
        },
    ]);
    return new AppResponse_1.default(null, { data: categorie[0] }, OK);
}));
//# sourceMappingURL=menus.js.map