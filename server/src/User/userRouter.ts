import express from "express";
import { isLoggedIn } from "../../middleWare/isLoggedIn";
import { isNotLoggedIn } from "../../middleWare/isNotLoggedIn";
import userController from "./userController";

const router = express.Router();

router.get("/", userController.getUser);

router.post("/signup", isNotLoggedIn, userController.addUser);

router.post("/login", isNotLoggedIn, userController.login);

router.get("/logout", isLoggedIn, userController.logout);

export default router;
