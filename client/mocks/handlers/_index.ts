import {
  getAllCategoryLength,
  getCategoryPosts,
  getOnePost,
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
  getOnePost,
  getPostsNum,
  getTopViewsPosts,
  getVisitor,
  postVisitor,
  getPostViewCount,
];
