"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middleWare_1 = require("../../middleWare");
var postController_1 = __importDefault(require("./postController"));
var router = express_1.default.Router();
router.post("/", middleWare_1.isLoggedIn, postController_1.default.AddPost);
router.post("/:postId/comment", middleWare_1.isLoggedIn, postController_1.default.addComment);
router.get("/load/:postId", postController_1.default.getPost);
router.delete("/:postId", middleWare_1.isLoggedIn, postController_1.default.deletePost);
router.patch("/:postId", middleWare_1.isLoggedIn, postController_1.default.updatePost);
exports.default = router;
