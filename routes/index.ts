import { NextFunction, Request, Response } from "express";
import { Router } from "express";
// import model from "../model";
import { auth } from "../auth/authMiddleware";
import { registerUser, githubRegister } from "../controller/register";
import loginUser from "../controller/login";
import passport from "passport";
import AppError from "../utils/AppError";

declare module "express-session" {
  interface SessionData {
    token: string;
    username: string;
  }
}

var router = Router();

// router.get("/", async function (req: Request, res: Response) {
router.get("/", auth, async function (req: Request, res: Response) {
  console.log(req.user);
  res.status(200).json(req.user);
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("token");
    if (req.user && req.isAuthenticated()) {
      req.logout(function (err: Error) {
        if (err) return console.log(err);
      });
    }
    res.status(200).json({ status: 200, message: "logged out successfully" });
  } catch (error) {
    return next(new AppError(400, error.message));
  }
});

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

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/auth/google/logout", (req: any, res: any) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL + "login");
});

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}login`,
    successRedirect: `${process.env.CLIENT_URL}`,
  })
);

export default router;
