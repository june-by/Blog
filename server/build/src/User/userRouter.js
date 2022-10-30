"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var isLoggedIn_1 = require("../../middleWare/isLoggedIn");
var isNotLoggedIn_1 = require("../../middleWare/isNotLoggedIn");
var userController_1 = __importDefault(require("./userController"));
var router = express_1.default.Router();
router.get("/", userController_1.default.getUser);
router.post("/signup", isNotLoggedIn_1.isNotLoggedIn, userController_1.default.addUser);
router.post("/login", isNotLoggedIn_1.isNotLoggedIn, userController_1.default.login);
router.get("/logout", isLoggedIn_1.isLoggedIn, userController_1.default.logout);
exports.default = router;
