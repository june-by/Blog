import { customAxios } from "utils/CustomAxios";
import { AddPostParams } from "Types/Post";

export const getMainPostsAPI = async (page: number) => {
  const { data } = await customAxios.get(`/posts/load/main/${page}`);
  return data;
};

export const getAllCategoryLengthAPI = async () => {
  const { data } = await customAxios.get("/posts/load/categoryLength");
  return data;
};

export const getOnePostAPI = async (id: number) => {
  if (!id) return;
  const { data } = await customAxios.get(`/post/load/${id}`);
  return data;
};

export const getCategoryPostAPI = async (category: string | string[] | undefined, pageNum: number) => {
  if (typeof category !== "string") return undefined;
  const { data } = await customAxios.get(`/posts/load/${category}/${pageNum}`);
  return data;
};

export const getSearchPostAPI = async (search: string | string[] | undefined) => {
  if (typeof search !== "string") return undefined;
  const { data } = await customAxios.get(`/posts/search/${encodeURIComponent(search)}`);
  return data;
};

export const getTagPostAPI = async (tag: string | string[] | undefined) => {
  if (typeof tag !== "string") return undefined;
  const { data } = await customAxios.get(`/posts/tag/${encodeURIComponent(tag)}`);
  return data;
};

export const AddPostAPI = async (reqData: AddPostParams) => {
  const { data } = await customAxios.post("/post", reqData);
  return data;
};

export const EditPostAPI = async (reqData: AddPostParams, id: number) => {
  const { data } = await customAxios.patch(`/post/${id}`, reqData);
  return data;
};

export const DeletePostAPI = async (id: number) => {
  const { data } = await customAxios.delete(`/post/${id}`);
  return data;
};

export const AddCommentAPI = async ({ postId, comment }: { postId: number; comment: string }) => {
  const { data } = await customAxios.post(`/post/${postId}/comment`, {
    comment: comment,
  });
  return data;
};

export const GetTopViewsPostsAPI = async () => {
  const { data } = await customAxios.get("/posts/topViews");
  return data;
};
