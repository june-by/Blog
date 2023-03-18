import { getRecentComment, postComment } from "./comment";
import {
  getAllCategoryLength,
  getCategoryPosts,
  getOnePost,
  getPostComments,
  getPostsNum,
  getPostViewCount,
  getTopViewsPosts,
} from "./post";
import { getRecentTag } from "./tag";
import { getUserInfo, login, logout, signup } from "./user";
import { getVisitor, postVisitor } from "./visitor";

export const handlers = [
  getAllCategoryLength,
  getUserInfo,
  login,
  logout,
  signup,
  getRecentTag,
  getCategoryPosts,
  postComment,
  getOnePost,
  getPostsNum,
  getTopViewsPosts,
  getRecentComment,
  getVisitor,
  getPostComments,
  postVisitor,
  getPostViewCount,
];
