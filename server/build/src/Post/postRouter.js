"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var isAdmin_1 = require("../../middleWare/isAdmin");
var postController_1 = __importDefault(require("./postController"));
var router = express_1.default.Router();
router.post("/", isAdmin_1.isAdmin, postController_1.default.AddPost);
router.get("/load/:postId", postController_1.default.getPost);
router.get("/load/viewCount/:postId", postController_1.default.getPostViewCount);
router.delete("/:postId", isAdmin_1.isAdmin, postController_1.default.deletePost);
router.patch("/:postId", isAdmin_1.isAdmin, postController_1.default.updatePost);
exports.default = router;
