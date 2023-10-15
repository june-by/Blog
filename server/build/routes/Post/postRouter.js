"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = __importDefault(require("./postController"));
const _middleware_1 = require("../../middleWare");
const router = express_1.default.Router();
router.post("/", _middleware_1.isAdmin, (0, _middleware_1.cacheClearMiddleWare)("post"), postController_1.default.AddPost);
router.get("/load/:postId", postController_1.default.getPost);
router.get("/load/viewCount/:postId", postController_1.default.getPostViewCount);
router.delete("/:postId", _middleware_1.isAdmin, (0, _middleware_1.cacheClearMiddleWare)("post"), postController_1.default.deletePost);
router.patch("/:postId", _middleware_1.isAdmin, (0, _middleware_1.cacheClearMiddleWare)("post"), postController_1.default.updatePost);
exports.default = router;
