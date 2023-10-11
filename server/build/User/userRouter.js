"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isLoggedIn_1 = require("../src/middleWare/isLoggedIn");
const isNotLoggedIn_1 = require("../src/middleWare/isNotLoggedIn");
const passport_1 = __importDefault(require("passport"));
const userController_1 = __importDefault(require("./userController"));
const constants_1 = require("../src/constants");
const router = express_1.default.Router();
router.get("/", userController_1.default.getUser);
router.post("/signup", isNotLoggedIn_1.isNotLoggedIn, userController_1.default.addUser);
router.post("/login", isNotLoggedIn_1.isNotLoggedIn, userController_1.default.login);
router.get("/logout", isLoggedIn_1.isLoggedIn, userController_1.default.logout);
router.get("/githublogin", isNotLoggedIn_1.isNotLoggedIn, passport_1.default.authenticate("github"));
router.get("/github/callback", isNotLoggedIn_1.isNotLoggedIn, passport_1.default.authenticate("github", { successRedirect: constants_1.CLIENT_URL }));
router.get("/kakaologin", isNotLoggedIn_1.isNotLoggedIn, passport_1.default.authenticate("kakao"));
router.get("/kakao/callback", passport_1.default.authenticate("kakao", {
    failureRedirect: constants_1.CLIENT_URL,
}), (req, res) => res.redirect(constants_1.CLIENT_URL));
exports.default = router;
