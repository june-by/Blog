import { customAxios } from "utils/CustomAxios";
import { AddPostParams } from "Types/post";

export const getAllPostsId = async (): Promise<{ id: number }[]> => {
  try {
    const { data } = await customAxios.get(`/posts/load/id`);
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getMainPostsAPI = async (page: number) => {
  try {
    const { data } = await customAxios.get(`/posts/load/main/${page}`);
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getAllCategoryLengthAPI = async () => {
  try {
    const { data } = await customAxios.get("/posts/load/categoryLength");
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getOnePostAPI = async (id: number) => {
  if (!id) return;
  try {
    const { data } = await customAxios.get(`/post/load/${id}`);
    return data;
  } catch (err: any) {
    throw new Error(err?.response?.data);
  }
};

export const getCategoryPostAPI = async (category: string | string[] | undefined, pageNum: number) => {
  if (typeof category !== "string") return undefined;
  try {
    const { data } = await customAxios.get(`/posts/load/${category}/${pageNum}`);
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getSearchPostAPI = async (search: string | string[] | undefined, pageNum: number) => {
  if (typeof search !== "string") return undefined;
  try {
    const { data } = await customAxios.get(`/posts/search/${encodeURIComponent(search)}/${pageNum}`);
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getTagPostAPI = async (tag: string | string[] | undefined, pageNum: number) => {
  if (typeof tag !== "string") return undefined;
  try {
    const { data } = await customAxios.get(`/posts/tag/${encodeURIComponent(tag)}/${pageNum}`);
    return data;
  } catch (err) {
    throw new Error();
  }
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
  try {
    const { data } = await customAxios.post(`/post/${postId}/comment`, {
      comment: comment,
    });
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const GetTopViewsPostsAPI = async () => {
  try {
    const { data } = await customAxios.get("/posts/topViews");
    return data;
  } catch (err) {
    throw new Error();
  }
};
