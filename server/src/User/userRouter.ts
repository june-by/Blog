import express from "express";
import { isLoggedIn } from "middleWare/isLoggedIn";
import { isNotLoggedIn } from "middleWare/isNotLoggedIn";
import passport from "passport";
import userController from "./userController";

const router = express.Router();

router.get("/", userController.getUser);

router.post("/signup", isNotLoggedIn, userController.addUser);

router.post("/login", isNotLoggedIn, userController.login);

router.get("/logout", isLoggedIn, userController.logout);

router.get("/githublogin", isNotLoggedIn, passport.authenticate("github"));

router.get(
  "/github/callback",
  isNotLoggedIn,
  passport.authenticate("github", { successRedirect: "https://byjuun.com" })
);

export default router;
