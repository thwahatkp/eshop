"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const model = __importStar(require("../model"));
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
    const category = yield model.Menus.findOneAndUpdate({}, {
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
    return new AppResponse_1.default("success", category, OK);
}));
exports.listCategory = (0, tryCatch_1.default)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const categorie = yield model.Menus.aggregate([
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
    return new AppResponse_1.default(null, categorie[0], OK);
}));
//# sourceMappingURL=menus.js.map