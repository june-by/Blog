const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("./userController");

router.get("/", userController.getUser);

router.post("/signup", userController.addUser);

router.post("/login", userController.login);

router.get("/logout", userController.logout);

module.exports = router;
