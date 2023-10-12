import express from "express";
import { isLoggedIn } from "@middleware/isLoggedIn";
import { isNotLoggedIn } from "@middleware/isNotLoggedIn";
import passport from "passport";
import userController from "./userController";
import { CLIENT_URL } from "@constants";

const router = express.Router();

router.get("/", userController.getUser);

router.post("/signup", isNotLoggedIn, userController.addUser);

router.post("/login", isNotLoggedIn, userController.login);

router.get("/logout", isLoggedIn, userController.logout);

router.get("/githublogin", isNotLoggedIn, passport.authenticate("github"));

router.get(
  "/github/callback",
  isNotLoggedIn,
  passport.authenticate("github", { successRedirect: CLIENT_URL })
);

router.get("/kakaologin", isNotLoggedIn, passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: CLIENT_URL,
  }),
  (req, res) => res.redirect(CLIENT_URL)
);

export default router;
