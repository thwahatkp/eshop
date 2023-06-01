import express from 'express'
import { Router } from "express";
// import model from "../model";
import { auth } from "../auth/authMiddleware";
import { registerUser, githubRegister } from "../controller/register";
import loginUser from "../controller/login";

var router = Router();

router.get("/", [auth], async function (req: any, res: any) {
  console.log(req.user);
  res.status(200).json(req.user);
});

router.post("/register", async (req: express.Request, res: express.Response) => {
  try {
    let response: any = await registerUser(req);
    res.cookie("token", response.token, { maxAge: 24 * 60 * 60 * 1000 });
    delete response.token;
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/login", async (req: express.Request, res: express.Response) => {
  try {
    let response: any = await loginUser(req);
    res.cookie("token", response.data.token, { maxAge: 24 * 60 * 60 * 1000 });
    delete response.data.token;
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/logout", async (req: express.Request, res: express.Response) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ status: 200, message: "logged out successfully" });
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/register-github", async (req: express.Request, res: express.Response) => {
  try {
    console.log(req.cookies);
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
