import { customAxios } from "utils/CustomAxios";
import { CategoryCount, PostFormType, PostsType, PostType } from "Types/post";
import MESSAGE from "constants/message";

export const getAllPostsId = async (): Promise<{ id: number }[]> => {
  try {
    const { data } = await customAxios.get(`/posts/load/id`);
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getMainPostsAPI = async (
  page: number
): Promise<Array<PostsType>> => {
  try {
    const { data } = await customAxios.get(`/posts/load/main/${page}`);
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getAllCategoryLengthAPI = async (): Promise<
  Array<CategoryCount>
> => {
  try {
    const { data } = await customAxios.get("/posts/load/categoryLength");
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getPostAPI = async (id: number): Promise<PostType | null> => {
  if (id === 0) return null;
  if (isNaN(id)) throw new Error(MESSAGE.INVALIDE_ACCESS);
  if (!id) throw new Error();
  try {
    const { data } = await customAxios.get(`/post/load/${id}`);
    return data;
  } catch (err: any) {
    console.log(err);
    throw Error(err?.response?.data);
  }
};

export const getCategoryPostAPI = async (
  category: string | string[] | undefined,
  pageNum: number
): Promise<Array<PostsType>> => {
  if (typeof category !== "string") return [];
  try {
    const { data } = await customAxios.get(
      `/posts/load/${category}/${pageNum}`
    );
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getSeriesPostAPI = async (
  seriesTitle: string | string[] | undefined,
  pageNum: number
): Promise<Array<PostsType>> => {
  if (typeof seriesTitle !== "string") return [];
  try {
    const { data } = await customAxios.get(
      `/posts/series/${seriesTitle}/${pageNum}`
    );
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getSearchPostAPI = async (
  search: string | string[] | undefined,
  pageNum: number
): Promise<Array<PostsType>> => {
  if (typeof search !== "string") return [];
  try {
    const { data } = await customAxios.get(
      `/posts/search/${encodeURIComponent(search)}/${pageNum}`
    );
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const getTagPostAPI = async (
  tag: string | string[] | undefined,
  pageNum: number
): Promise<Array<PostsType>> => {
  if (typeof tag !== "string") return [];
  try {
    const { data } = await customAxios.get(
      `/posts/tag/${encodeURIComponent(tag)}/${pageNum}`
    );
    return data;
  } catch (err) {
    throw new Error();
  }
};

export const AddPostAPI = async (reqData: PostFormType): Promise<void> => {
  await customAxios.post("/post", reqData);
};

export const EditPostAPI = async (
  reqData: PostFormType,
  id: number
): Promise<void> => {
  await customAxios.patch(`/post/${id}`, reqData);
};

export const DeletePostAPI = async (id: number): Promise<void> => {
  await customAxios.delete(`/post/${id}`);
};

export const getPostViewCountAPI = async (
  postId: number
): Promise<{ viewCount: number }> => {
  try {
    const { data } = await customAxios.get(`/post/load/viewCount/${postId}`);
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
