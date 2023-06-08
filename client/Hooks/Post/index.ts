import {
  AddPostAPI,
  DeletePostAPI,
  EditPostAPI,
  getAllCategoryLengthAPI,
  getCategoryPostAPI,
  getOnePostAPI,
  getPostViewCountAPI,
  getSearchPostAPI,
  getTagPostAPI,
  GetTopViewsPostsAPI,
} from "services/post";
import { useInfiniteQuery, useMutation, useQuery } from "react-query";
import { getMainPostsAPI } from "services/post";
import {
  AddPostParams,
  CategoryCount,
  PostsType,
  PostType,
  TopViewsPost,
} from "Types/post";
import { useRouter } from "next/router";
import QUERY_KEY from "constants/queryKey";
import CACHE_OPTION from "constants/cacheOption";
import POSTS_PER_PAGE from "constants/postsPerPage";
import MESSAGE from "constants/message";
import { CommentType } from "Types/comment";
import { getCommentAPI } from "services/comment";

export const useGetMainPost = () =>
  useInfiniteQuery<Array<PostsType>>(
    [QUERY_KEY.POST.MAIN],
    ({ pageParam = 1 }) => getMainPostsAPI(pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetOnePost = (id: number) => {
  const router = useRouter();
  return useQuery<PostType | null>(
    [QUERY_KEY.POST.ONE, id],
    () => getOnePostAPI(id),
    {
      ...CACHE_OPTION.ALL,
      onError(err: any) {
        alert(err);
        router.replace("/");
      },
    }
  );
};
export const useGetTopViewsPosts = () =>
  useQuery<TopViewsPost[]>(
    [QUERY_KEY.POST.TOPVIEWS],
    () => GetTopViewsPostsAPI(),
    CACHE_OPTION.WITHOUT_FETCH_ON_MOUNT
  );

export const useGetAllCateogryLength = () =>
  useQuery<Array<CategoryCount>>(
    [QUERY_KEY.POST.CATEGORY_LENGTH],
    () => getAllCategoryLengthAPI(),
    CACHE_OPTION.ALL
  );

export const useGetCategoryPosts = (category: string | string[] | undefined) =>
  useInfiniteQuery<Array<PostsType>>(
    [QUERY_KEY.POST.CATEGORY, category],
    ({ pageParam = 1 }) => getCategoryPostAPI(category, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetSearchPosts = (search: string | string[] | undefined) =>
  useInfiniteQuery<Array<PostsType>>(
    [QUERY_KEY.POST.SEARCH, search],
    ({ pageParam = 1 }) => getSearchPostAPI(search, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetTagPosts = (tag: string | string[] | undefined) =>
  useInfiniteQuery<Array<PostsType>>(
    [QUERY_KEY.POST.TAG, tag],
    ({ pageParam = 1 }) => getTagPostAPI(tag, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetPostComments = (id: number) =>
  useQuery<{ comments: CommentType[] }>(
    [QUERY_KEY.COMMNET.ONE, id],
    () => getCommentAPI(id),
    CACHE_OPTION.ALL
  );

export const useGetPostViewCount = (id: number) =>
  useQuery<{ viewCount: number }>(
    [QUERY_KEY.POST.VIEWCOUNT, id],
    () => getPostViewCountAPI(id),
    CACHE_OPTION.ALL
  );

export const useAddPost = () => {
  return useMutation(AddPostAPI, {
    onMutate: () => {
      document.body.style.cursor = "wait";
    },
    onSuccess: () => {
      document.body.style.cursor = "default";
      alert(MESSAGE.POST_REGIST_SUCCESS);
      return window.location.replace("/");
    },
  });
};

export const useEditPost = () => {
  const { query } = useRouter();
  return useMutation(
    (reqData: AddPostParams) => EditPostAPI(reqData, Number(query.id)),
    {
      onMutate: () => {
        document.body.style.cursor = "wait";
      },
      onSuccess: () => {
        document.body.style.cursor = "default";
        alert(MESSAGE.POST_EDIT_SUCCESS);
        return window.location.replace(`/post/${query.id}`);
      },
    }
  );
};

export const useDeletePost = () => {
  return useMutation(DeletePostAPI, {
    onSuccess: () => {
      alert(MESSAGE.POST_DELETE_SUCCESS);
      return window.location.replace("/");
    },
  });
};
