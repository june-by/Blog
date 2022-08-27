import {
  AddPostAPI,
  DeletePostAPI,
  EditPostAPI,
  getAllCategoryLengthAPI,
  getCategoryPostAPI,
  getOnePostAPI,
  getPostsNumAPI,
  getSearchPostAPI,
  getTagPostAPI,
  GetTopViewsPostsAPI,
} from "./../../API/Post/index";
import { useMutation, useQuery } from "react-query";
import { getMainPostsAPI } from "../../API/Post";
import { AddPostParams, CategoryCount, PostsType, PostType, TopViewsPost } from "../../Types/Post";
import { useRouter } from "next/router";
import { QUERY_KEY } from "../../utils/queryKey";
import { CACHE_OPTION } from "../../utils/cacheOption";

export const useGetMainPost = (pageNum: number) => useQuery<Array<PostsType>>([QUERY_KEY.POST.MAIN, pageNum], () => getMainPostsAPI(pageNum), CACHE_OPTION.ALL);
export const useGetOnePost = (id: number) => useQuery<PostType>([QUERY_KEY.POST.ONE, id], () => getOnePostAPI(id), CACHE_OPTION.ALL);
export const useGetTopViewsPosts = () => useQuery<TopViewsPost[]>([QUERY_KEY.POST.TOPVIEWS], () => GetTopViewsPostsAPI(), CACHE_OPTION.WITHOUT_FETCH_ON_MOUNT);

export const useGetAllCateogryLength = () =>
  useQuery<Array<CategoryCount>>([QUERY_KEY.POST.CATEGORY_LENGTH], () => getAllCategoryLengthAPI(), CACHE_OPTION.ALL);

export const useGetPostNum = (category: string | string[] | undefined) =>
  useQuery([QUERY_KEY.POST.NUM_OF_POSTS, category], () => getPostsNumAPI(category), CACHE_OPTION.ALL);

export const useGetCategoryPosts = (category: string | string[] | undefined, pageNum: number) =>
  useQuery<Array<PostsType>>([QUERY_KEY.POST.CATEGORY, category, pageNum], () => getCategoryPostAPI(category, pageNum), CACHE_OPTION.ALL);

export const useGetSearchPosts = (search: string | string[] | undefined) =>
  useQuery<Array<PostsType>>([QUERY_KEY.POST.SEARCH, search], () => getSearchPostAPI(search), CACHE_OPTION.ALL);

export const useGetTagPosts = (tag: string | string[] | undefined) =>
  useQuery<Array<PostsType>>([QUERY_KEY.POST.TAG, tag], () => getTagPostAPI(tag), CACHE_OPTION.ALL);

export const useAddPost = () => {
  return useMutation(AddPostAPI, {
    onSuccess: () => {
      alert("게시글 등록 성공");
      return window.location.replace("/");
    },
  });
};

export const useEditPost = () => {
  const { query } = useRouter();
  return useMutation((reqData: AddPostParams) => EditPostAPI(reqData, Number(query.id)), {
    onSuccess: () => {
      alert("게시글 수정 성공");
      return window.location.replace(`/post/${query.id}`);
    },
  });
};

export const useDeletePost = () => {
  return useMutation(DeletePostAPI, {
    onSuccess: () => {
      alert("게시글 삭제 성공");
      return window.location.replace("/");
    },
  });
};
