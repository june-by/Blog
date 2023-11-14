import {
  getAllCategoryLength,
  getCategoryPosts,
  getOnePost,
  getPostsNum,
  getPostViewCount,
} from "./post";
import { getUserInfo, login, logout, signup } from "./user";
import { getVisitor } from "./visitor";

export const handlers = [
  getAllCategoryLength,
  getUserInfo,
  login,
  logout,
  signup,
  getCategoryPosts,
  getOnePost,
  getPostsNum,
  getVisitor,
  getPostViewCount,
];
