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
exports.sliderList = exports.addSlider = void 0;
const global_1 = require("../helper/global");
const model = __importStar(require("../model"));
const types_1 = require("../helper/types");
const tryCatch_1 = __importDefault(require("../middleware/tryCatch"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const AppResponse_1 = __importDefault(require("../utils/AppResponse"));
const { OK, BAD_REQUEST, CREATED } = types_1.StatusCode;
exports.addSlider = (0, tryCatch_1.default)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, link, btn_name, description } = req.body;
    if ((0, global_1.isNull)(title))
        throw new AppError_1.default(400, "please enter a title");
    if ((0, global_1.isNull)(link))
        throw new AppError_1.default(400, "please enter provide a button link");
    if ((0, global_1.isNull)(btn_name))
        throw new AppError_1.default(400, "please enter a button name");
    if ((0, global_1.isNull)(description))
        throw new AppError_1.default(400, "please enter a description");
    const img = req.file.path.replace("public/", "");
    const slider = new model.Slider({
        title,
        link,
        btn_name,
        img,
        description,
    }).save();
    return new AppResponse_1.default("added successfully", null, 200);
}));
exports.sliderList = (0, tryCatch_1.default)((req) => __awaiter(void 0, void 0, void 0, function* () {
    const slider = yield model.Slider.find({ status: 0 }).sort({ _id: -1 }).select("-createdAt -updatedAt -__v");
    return new AppResponse_1.default(null, slider, 200);
}));
//# sourceMappingURL=slider.js.map