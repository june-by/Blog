import { customAxios } from "utils/CustomAxios";
import { CategoryCount, PostFormType, PostsType, PostType } from "Types/post";
import MESSAGE from "constants/message";
import { request } from "services";

export const getAllPostsId = async () =>
  request<{ id: number }[]>({ method: "get", url: `/posts/load/id` });

export const getMainPostsAPI = async (page: number) =>
  request<PostsType[]>({
    method: "get",
    url: `/posts/load/main/${page}`,
  });

export const getAllCategoryLengthAPI = async () =>
  request<CategoryCount[]>({
    method: "get",
    url: "/posts/load/categoryLength",
  });

export const getPostAPI = async (id: number) => {
  if (id === 0) return null;
  if (isNaN(id)) throw new Error(MESSAGE.INVALIDE_ACCESS);
  if (!id) throw new Error();
  return request<PostType | null>({
    method: "get",
    url: `/post/load/${id}`,
    onError: (err) => err?.response?.data,
  });
};

export const getCategoryPostAPI = async (
  category: string | string[] | undefined,
  pageNum: number
) => {
  if (typeof category !== "string") return [];
  return request<PostsType[]>({
    method: "get",
    url: `/posts/load/${category}/${pageNum}`,
  });
};

export const getSeriesPostAPI = async (
  seriesTitle: string | string[] | undefined,
  pageNum: number
) => {
  if (typeof seriesTitle !== "string") return [];
  return request<PostsType[]>({
    method: "get",
    url: `/posts/series/${encodeURIComponent(seriesTitle)}/${pageNum}`,
  });
};

export const getSearchPostAPI = async (
  search: string | string[] | undefined,
  pageNum: number
): Promise<Array<PostsType>> => {
  if (typeof search !== "string") return [];
  return request<PostsType[]>({
    method: "get",
    url: `/posts/series/${encodeURIComponent(search)}/${pageNum}`,
  });
};

export const getTagPostAPI = async (
  tag: string | string[] | undefined,
  pageNum: number
): Promise<Array<PostsType>> => {
  if (typeof tag !== "string") return [];
  return request<PostsType[]>({
    method: "get",
    url: `/posts/series/${encodeURIComponent(tag)}/${pageNum}`,
  });
};

export const AddPostAPI = async (reqData: PostFormType) =>
  request<void>({ method: "post", url: "/post", body: reqData });

export const EditPostAPI = async (reqData: PostFormType, id: number) =>
  request<void>({ method: "patch", url: `/post/${id}`, body: reqData });

export const DeletePostAPI = async (id: number) =>
  request<void>({ method: "delete", url: `/post/${id}` });

export const getPostViewCountAPI = async (postId: number) =>
  request<{ viewCount: number }>({
    method: "get",
    url: `/post/load/viewCount/${postId}`,
  });

export const GetTopViewsPostsAPI = async () => {
  try {
    const { data } = await customAxios.get("/posts/topViews");
    return data;
  } catch (err) {
    throw new Error();
  }
};
