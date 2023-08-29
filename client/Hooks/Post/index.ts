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
  GetTopViewsPostsAPI,
  getSeriesPostAPI,
} from "services/post";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";
import { getMainPostsAPI } from "services/post";
import {
  CategoryCount,
  PostFormType,
  PostsType,
  PostType,
  TopViewsPost,
} from "Types/post";
import { useRouter } from "next/router";
import QUERY_KEY from "constants/queryKey";
import CACHE_OPTION from "constants/cacheOption";
import POSTS_PER_PAGE from "constants/postsPerPage";
import MESSAGE from "constants/message";

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

export const useGetPostQuery = (
  id: number,
  queryOptions?: UseQueryOptions<any>
) => {
  const router = useRouter();

  return useQuery<PostType | null>(
    [QUERY_KEY.POST.ONE, id],
    () => getPostAPI(id),
    {
      ...CACHE_OPTION.ALL,
      onError: (err) => {
        alert(err);
        router.replace("/");
      },
      ...queryOptions,
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

export const useGetCategoryPosts = (params: string) =>
  useInfiniteQuery<Array<PostsType>>(
    [QUERY_KEY.POST.CATEGORY, params],
    ({ pageParam = 1 }) => getCategoryPostAPI(params, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetSeriesPosts = (params: string) =>
  useInfiniteQuery<Array<PostsType>>(
    [QUERY_KEY.POST.SEARCH, params],
    ({ pageParam = 1 }) => getSeriesPostAPI(params, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetSearchPosts = (params: string) =>
  useInfiniteQuery<Array<PostsType>>(
    [QUERY_KEY.POST.SEARCH, params],
    ({ pageParam = 1 }) => getSearchPostAPI(params, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
  );

export const useGetTagPosts = (params: string) =>
  useInfiniteQuery<Array<PostsType>>(
    [QUERY_KEY.POST.TAG, params],
    ({ pageParam = 1 }) => getTagPostAPI(params, pageParam),
    {
      ...CACHE_OPTION.ALL,
      getNextPageParam: (lastPage, allPage) =>
        lastPage.length < POSTS_PER_PAGE ? undefined : allPage.length + 1,
    }
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
      return window.location.replace("/");
    },
  });
};

export const useEditPost = ({ postId }: { postId: number }) => {
  return useMutation((reqData: PostFormType) => EditPostAPI(reqData, postId), {
    onSuccess: () => {
      return window.location.replace(`/post/${postId}`);
    },
  });
};

export const useDeletePost = () => {
  return useMutation(DeletePostAPI, {
    onSuccess: () => {
      alert(MESSAGE.POST_DELETE_SUCCESS);
      return window.location.replace("/");
    },
  });
};
