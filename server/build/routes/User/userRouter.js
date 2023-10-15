"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _middleware_1 = require("../../middleWare");
const passport_1 = __importDefault(require("passport"));
const userController_1 = __importDefault(require("./userController"));
const _constants_1 = require("../../constants");
const router = express_1.default.Router();
router.get("/", userController_1.default.getUser);
router.post("/signup", _middleware_1.isNotLoggedIn, userController_1.default.addUser);
router.post("/login", _middleware_1.isNotLoggedIn, userController_1.default.login);
router.get("/logout", _middleware_1.isLoggedIn, userController_1.default.logout);
router.get("/githublogin", _middleware_1.isNotLoggedIn, passport_1.default.authenticate("github"));
router.get("/github/callback", _middleware_1.isNotLoggedIn, passport_1.default.authenticate("github", { successRedirect: _constants_1.CLIENT_URL }));
router.get("/kakaologin", _middleware_1.isNotLoggedIn, passport_1.default.authenticate("kakao"));
router.get("/kakao/callback", passport_1.default.authenticate("kakao", {
    failureRedirect: _constants_1.CLIENT_URL,
}), (req, res) => res.redirect(_constants_1.CLIENT_URL));
exports.default = router;
