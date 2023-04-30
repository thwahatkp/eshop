var express = require("express");
const model = require("../model");
const { auth } = require("../auth/authMiddleware");
const registerUser = require("../controller/register");
const loginUser = require("../controller/login");

var router = express.Router();

router.get("/", [auth], async function (req, res, next) {
  res.status(200).json(req.user);
});

router.post("/register", async (req, res) => {
  try {
    let response = await registerUser(req);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let response = await loginUser(req);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(error.status).json(error);
  }
});

module.exports = router;
