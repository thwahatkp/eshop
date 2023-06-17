import express, { Request, Response } from "express";
import { Router } from "express";
// import model from "../model";
import { auth } from "../auth/authMiddleware";
import { registerUser, githubRegister } from "../controller/register";
import loginUser from "../controller/login";
import ErrorHandler from "../utils/Error";

declare module "express-session" {
  interface SessionData {
    token: string;
    username: string;
  }
}

var router = Router();

// router.get("/", async function (req: Request, res: Response) {
router.get("/", auth, async function (req: any, res: Response) {
  res.status(200).json(req.user);
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    let response: any = await registerUser(req);
    res.cookie("token", response.token, { maxAge: 24 * 60 * 60 * 1000 });
    delete response.token;
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    let response: any = await loginUser(req);
    // if (req.body.remember_me === "true") {
      res.cookie("token", response.data.token, { maxAge: 48 * 60 * 60 * 1000 });
    // } else {
      // res.clearCookie("token");
      // req.session.token = response.data.token;
    // }
    delete response.data.token;
    res.status(response.status).json(response);
  } catch (error) {
    // next(error)
    res.status(error.status).json(error);
  }
});

router.post("/logout", async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ status: 200, message: "logged out successfully" });
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/session/destroy", async (req: Request, res: Response) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error clearing session:", err);
        res
          .status(500)
          .json({ success: false, error: "Failed to clear session" });
      } else {
        res.sendStatus(200);
        // res.json({ success: true });
      }
    });
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/register-github", async (req: Request, res: Response) => {
  try {
    // res.clearCookie("authUser");
    let response = await githubRegister(req);
    let data = JSON.stringify({ name: "thwaha", password: 123456 });
    res.cookie("authUser", data, { maxAge: 24 * 60 * 60 * 1000 });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
