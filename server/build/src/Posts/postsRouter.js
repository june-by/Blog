"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var postsController_1 = __importDefault(require("./postsController"));
var router = express_1.default.Router();
router.get("/load/id", postsController_1.default.getAllPostsId);
router.get("/load/main/:page", postsController_1.default.getMainPosts);
router.get("/load/categoryLength", postsController_1.default.getCategoryPostsCount);
router.get("/load/length/:category", postsController_1.default.getPostsLength);
router.get("/load/:category/:page", postsController_1.default.getCategoryPosts);
router.get("/search/:keyword/:page", postsController_1.default.getPostsBySearchKeyWord);
router.get("/tag/:keyword/:page", postsController_1.default.getPostsByTag);
router.get("/topViews", postsController_1.default.getTopViewsPosts);
exports.default = router;
