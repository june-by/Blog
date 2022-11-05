import { getCategoryPosts, getOnePost, getPostsNum, getTopViewsPosts, postComment } from "./post";
import { getUserInfo } from "./user";

export const handlers = [getUserInfo, getCategoryPosts, postComment, getOnePost, getPostsNum, getTopViewsPosts];
