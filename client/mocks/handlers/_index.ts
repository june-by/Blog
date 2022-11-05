import { getRecentComment, postComment } from "./comment";
import { getAllCategoryLength, getCategoryPosts, getOnePost, getPostsNum, getTopViewsPosts } from "./post";
import { getRecentTag } from "./tag";
import { getUserInfo } from "./user";
import { getVisitor } from "./visitor";

export const handlers = [
  getAllCategoryLength,
  getUserInfo,
  getRecentTag,
  getCategoryPosts,
  postComment,
  getOnePost,
  getPostsNum,
  getTopViewsPosts,
  getRecentComment,
  getVisitor,
];
