import {
  addPostAPI,
  deletePostAPI,
  editPostAPI,
  getCategoryPostAPI,
  getSearchPostAPI,
  getTagPostAPI,
  getSeriesPostAPI,
} from "@services/post";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { getMainPostsAPI } from "@services/post";
import { PostFormType } from "@Types";
import { POSTS_PER_PAGE, CACHE_OPTION, MESSAGE, QUERY_KEY } from "@constants";

export const useGetMainPost = () =>
  useInfiniteQuery(
    [QUERY_KEY.POST.MAIN],
    ({ pageParam = 1 }) => getMainPostsAPI(pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetCategoryPosts = (params: string) =>
  useInfiniteQuery(
    [QUERY_KEY.POST.CATEGORY, params],
    ({ pageParam = 1 }) => getCategoryPostAPI(params, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetSeriesPosts = (params: string) =>
  useInfiniteQuery(
    [QUERY_KEY.POST.SEARCH, params],
    ({ pageParam = 1 }) => getSeriesPostAPI(params, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetSearchPosts = (params: string) =>
  useInfiniteQuery(
    [QUERY_KEY.POST.SEARCH, params],
    ({ pageParam = 1 }) => getSearchPostAPI(params, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetTagPosts = (params: string) =>
  useInfiniteQuery(
    [QUERY_KEY.POST.TAG, params],
    ({ pageParam = 1 }) => getTagPostAPI(params, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useAddPost = () =>
  useMutation(addPostAPI, {
    onMutate: () => {
      document.body.style.cursor = "wait";
    },
    onSuccess: () => {
      document.body.style.cursor = "default";
      return window.location.replace("/");
    },
  });

export const useEditPost = ({ postId }: { postId: number }) =>
  useMutation((reqData: PostFormType) => editPostAPI(reqData, postId), {
    onSuccess: () => {
      return window.location.replace(`/post/${postId}`);
    },
  });

export const useDeletePostMutation = () =>
  useMutation(deletePostAPI, {
    onSuccess: () => {
      alert(MESSAGE.POST_DELETE_SUCCESS);
      return window.location.replace("/");
    },
  });
