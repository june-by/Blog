import {
  CategoryCount,
  PostFormType,
  PostType,
  PostPageDataType,
  PostListPageDataType,
} from "@Types";
import { REVALIDATE_TAG } from "@constants";
import request from "@services/request";
import { getYearMonthDate, groupBy } from "@utils";

export const getAllPostsId = async () =>
  request<{ id: number }[]>({ method: "get", url: `/posts/load/id` });

export const getMainPostsAPI = async (page: number) =>
  request<PostListPageDataType[]>({
    method: "get",
    url: `/posts/load/main/${page}`,
  });

export const getAllCategoryLengthAPI = async () =>
  request<CategoryCount[]>({
    method: "get",
    url: "/posts/load/categoryLength",
    options: {
      next: {
        tags: [REVALIDATE_TAG.POST],
      },
    },
  });

export const getPost = async ({ id }: Pick<PostType, "id">) => {
  if (isNaN(id)) return null;

  return request<PostPageDataType | null>({
    url: `/post/load/${id}`,
    method: "get",
    options: {
      next: {
        tags: [`${REVALIDATE_TAG.POST}${id}`],
      },
    },
  });
};

export const getCategoryPostAPI = async (
  category: string | string[] | undefined,
  pageNum: number
) => {
  if (typeof category !== "string") {
    return [];
  }
  return request<PostListPageDataType[]>({
    method: "get",
    url: `/posts/load/${category}/${pageNum}`,
  });
};

export const getSeriesPostAPI = async (
  seriesTitle: string | string[] | undefined,
  pageNum: number
) => {
  if (typeof seriesTitle !== "string") {
    return [];
  }
  return request<PostListPageDataType[]>({
    method: "get",
    url: `/posts/series/${encodeURIComponent(seriesTitle)}/${pageNum}`,
  });
};

export const getSearchPostAPI = async (
  search: string | string[] | undefined,
  pageNum: number
) => {
  if (typeof search !== "string") {
    return [];
  }
  return request<PostListPageDataType[]>({
    method: "get",
    url: `/posts/series/${encodeURIComponent(search)}/${pageNum}`,
  });
};

export const getTagPostAPI = async (
  tag: string | string[] | undefined,
  pageNum: number
) => {
  if (typeof tag !== "string") {
    return [];
  }
  return request<PostListPageDataType[]>({
    method: "get",
    url: `/posts/tag/${encodeURIComponent(tag)}/${pageNum}`,
  });
};

export const AddPostAPI = async (reqData: PostFormType) =>
  request<void>({ method: "post", url: "/post", body: reqData });

export const EditPostAPI = async (reqData: PostFormType, id: number) =>
  request<void>({ method: "post", url: `/post/edit/${id}`, body: reqData });

export const DeletePostAPI = async ({ id }: Pick<PostType, "id">) =>
  request<void>({ method: "post", url: `/post/delete/${id}` });

export const getPostViewCountAPI = async (postId: number) =>
  request<number>({
    method: "get",
    url: `/post/load/viewCount/${postId}`,
    options: {
      cache: "no-store",
    },
  });

export const getAllPosts = async () => {
  try {
    const posts = await request<Pick<PostType, "id" | "title" | "createdAt">[]>(
      {
        method: "get",
        url: "/posts/load/all",
        options: {
          next: { tags: [REVALIDATE_TAG.POST] },
        },
      }
    );
    return {
      data: groupBy(
        posts.map(({ createdAt, ...params }) => {
          const { year, month, date } = getYearMonthDate({ date: createdAt });
          return {
            date: `${month}.${date}`,
            year,
            ...params,
          };
        }),
        "year"
      ),
      length: posts.length,
    };
  } catch (err) {
    return null;
  }
};
