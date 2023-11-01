import {
  AddPostAPI,
  DeletePostAPI,
  EditPostAPI,
  getAllCategoryLengthAPI,
  getCategoryPostAPI,
  getPostAPI,
  getPostViewCountAPI,
  getSearchPostAPI,
  getTagPostAPI,
  getSeriesPostAPI,
} from "@services/post";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { getMainPostsAPI } from "@services/post";
import {
  CategoryCount,
  PostFormType,
  PostPageDataType,
  PostType,
} from "@Types";
import { useRouter } from "next/navigation";
import { POSTS_PER_PAGE, CACHE_OPTION, MESSAGE, QUERY_KEY } from "@constants";
import { getAllPostsAPI } from "@services/post/post.service";

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

export const useGetPostQuery = ({ id }: Pick<PostType, "id">) => {
  const router = useRouter();

  return useQuery<PostPageDataType | null>(
    [QUERY_KEY.POST.ONE, id],
    () => getPostAPI(id),
    {
      ...CACHE_OPTION.ALL,
      onError: (err) => {
        alert(err);
        router.replace("/");
      },
      enabled: isNaN(id) ? false : true,
    }
  );
};

export const useGetAllCateogryLength = () =>
  useQuery<Array<CategoryCount>>(
    [QUERY_KEY.POST.CATEGORY_LENGTH],
    () => getAllCategoryLengthAPI(),
    CACHE_OPTION.ALL
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
  useMutation(AddPostAPI, {
    onMutate: () => {
      document.body.style.cursor = "wait";
    },
    onSuccess: () => {
      document.body.style.cursor = "default";
      return window.location.replace("/");
    },
  });

export const useEditPost = ({ postId }: { postId: number }) =>
  useMutation((reqData: PostFormType) => EditPostAPI(reqData, postId), {
    onSuccess: () => {
      return window.location.replace(`/post/${postId}`);
    },
  });

export const useDeletePostMutation = () =>
  useMutation(DeletePostAPI, {
    onSuccess: () => {
      alert(MESSAGE.POST_DELETE_SUCCESS);
      return window.location.replace("/");
    },
  });

export const useGetAllPostsQuery = () =>
  useQuery([QUERY_KEY.POST.ALL], getAllPostsAPI, CACHE_OPTION.ALL);
