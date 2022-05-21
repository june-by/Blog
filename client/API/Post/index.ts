import { AddPostParams } from "../../Types/Post";
import { customAxios } from "../../utils/CustomAxios";

export const getMainPostsAPI = async (page: number) => {
  const { data } = await customAxios.get(`/posts/load/main/${page}`);
  return data;
};

export const getPostsNumAPI = async (category: string) => {
  const { data } = await customAxios.get(`/posts/load/length/${category}`);
  const { length } = data;
  if (length % 12 === 0) return length / 12;
  else return Math.floor(length / 12) + 1;
};

export const getOnePostAPI = async (id: number) => {
  const { data } = await customAxios.get(`/post/load/${id}`);
  return data;
};

export const getCategoryPostAPI = async (category: string, pageNum: number) => {
  const { data } = await customAxios.get(`/posts/load/${category}/${pageNum}`);
  return data;
};

export const getSearchPostAPI = async (search: string) => {
  const { data } = await customAxios.get(`/posts/search/${encodeURIComponent(search)}`);
  return data;
};

export const AddPostAPI = async (reqData: AddPostParams) => {
  const { data } = await customAxios.post("/post", reqData);
  return data;
};

export const DeletePostAPI = async (id: number) => {
  const { data } = await customAxios.delete(`/post/${id}`);
  return data;
};

export const AddCommentAPI = async ({ postId, comment }: { postId: number; comment: string }) => {
  const { data } = await customAxios.post(`/post/${postId}/comment`, { comment: comment });
  return data;
};
