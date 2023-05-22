var express = require("express");
const model = require("../model");
const { auth } = require("../auth/authMiddleware");
const controller = require("../controller/register");
const loginUser = require("../controller/login");

var router = express.Router();

router.get("/", [auth], async function (req, res) {
  console.log(req.user);
  res.status(200).json(req.user);
});

router.post("/register", async (req, res) => {
  try {
    let response = await controller.registerUser(req);
    res.cookie("token", response.token, { maxAge: 24 * 60 * 60 * 1000 });
    delete response.token;
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let response = await loginUser(req);
    res.cookie("token", response.data.token, { maxAge: 24 * 60 * 60 * 1000 });
    delete response.data.token;
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/logout", async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ status: 200, message: "logged out successfully" });
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/register-github", async (req, res) => {
  try {
    console.log(req.cookies);
    // res.clearCookie("authUser");
    let response = await controller.githubRegister(req);
    let data = JSON.stringify({ name: "thwaha", password: 123456 });
    res.cookie("authUser", data, { maxAge: 24 * 60 * 60 * 1000 });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
