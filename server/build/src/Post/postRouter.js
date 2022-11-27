"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var isAdmin_1 = require("middleWare/isAdmin");
var isLoggedIn_1 = require("middleWare/isLoggedIn");
var postController_1 = __importDefault(require("./postController"));
var router = express_1.default.Router();
router.post("/", isAdmin_1.isAdmin, postController_1.default.AddPost);
router.post(
  "/:postId/comment",
  isLoggedIn_1.isLoggedIn,
  postController_1.default.addComment
);
router.get("/load/:postId", postController_1.default.getPost);
router.delete(
  "/:postId",
  isAdmin_1.isAdmin,
  postController_1.default.deletePost
);
router.patch(
  "/:postId",
  isAdmin_1.isAdmin,
  postController_1.default.updatePost
);
exports.default = router;
