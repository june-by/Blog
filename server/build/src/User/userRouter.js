"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var isLoggedIn_1 = require("../../middleWare/isLoggedIn");
var isNotLoggedIn_1 = require("../../middleWare/isNotLoggedIn");
var passport_1 = __importDefault(require("passport"));
var userController_1 = __importDefault(require("./userController"));
var clientUrl_1 = __importDefault(require("../../src/constants/clientUrl"));
var router = express_1.default.Router();
router.get("/", userController_1.default.getUser);
router.post("/signup", isNotLoggedIn_1.isNotLoggedIn, userController_1.default.addUser);
router.post("/login", isNotLoggedIn_1.isNotLoggedIn, userController_1.default.login);
router.get("/logout", isLoggedIn_1.isLoggedIn, userController_1.default.logout);
router.get("/githublogin", isNotLoggedIn_1.isNotLoggedIn, passport_1.default.authenticate("github"));
router.get("/github/callback", isNotLoggedIn_1.isNotLoggedIn, passport_1.default.authenticate("github", { successRedirect: clientUrl_1.default }));
router.get("/kakaologin", isNotLoggedIn_1.isNotLoggedIn, passport_1.default.authenticate("kakao"));
router.get("/kakao/callback", passport_1.default.authenticate("kakao", {
    failureRedirect: clientUrl_1.default,
}), function (req, res) { return res.redirect(clientUrl_1.default); });
exports.default = router;
