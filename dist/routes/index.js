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
const express_1 = require("express");
// import model from "../model";
const authMiddleware_1 = require("../auth/authMiddleware");
const register_1 = require("../controller/register");
const login_1 = __importDefault(require("../controller/login"));
const passport_1 = __importDefault(require("passport"));
const AppError_1 = __importDefault(require("../utils/AppError"));
var router = (0, express_1.Router)();
// router.get("/", async function (req: Request, res: Response) {
router.get("/", authMiddleware_1.auth, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.user);
        console.log(req.cookies.token);
        res.status(200).json(req.user);
    });
});
router.post("/register", register_1.registerUser);
router.post("/login", login_1.default);
router.post("/logout", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.cookies.token);
        if (req.user && req.isAuthenticated()) {
            req.logout(function (err) {
                if (err)
                    return console.log(err);
            });
        }
        res.cookie("token", "", { expires: new Date(0) });
        res.clearCookie("token");
        res.status(200).json({ status: 200, message: "logged out successfully" });
    }
    catch (error) {
        return next(new AppError_1.default(400, error.message));
    }
}));
// router.post("/session/destroy", async (req: Request, res: Response) => {
//   try {
//     req.session.destroy((err) => {
//       if (err) {
//         console.error("Error clearing session:", err);
//         res
//           .status(500)
//           .json({ success: false, error: "Failed to clear session" });
//       } else {
//         res.sendStatus(200);
//         // res.json({ success: true });
//       }
//     });
//   } catch (error) {
//     res.status(error.status).json(error);
//   }
// });
router.get("/auth/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
router.get("/auth/google/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL + "login");
});
router.get("/auth/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}login`,
    successRedirect: `${process.env.CLIENT_URL}`,
}));
exports.default = router;
//# sourceMappingURL=index.js.map