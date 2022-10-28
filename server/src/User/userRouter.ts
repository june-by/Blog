import express from "express";
import passport from "passport";
import userController from "./userController";

const router = express.Router();

router.get("/", userController.getUser);

router.post("/signup", userController.addUser);

router.post("/login", userController.login);

router.get("/logout", userController.logout);

export default router;
