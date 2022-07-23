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
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMainPostsAPI } from "../../API/Post";
import { AddPostParams, CategoryCount, PostsType, PostType, TopViewsPost } from "../../Types/Post";
import { useRouter } from "next/router";

export const useGetMainPost = (pageNum: number) => {
  return useQuery<Array<PostsType>>(["MainPosts", pageNum], () => getMainPostsAPI(pageNum), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetAllCateogryLength = () => {
  return useQuery<Array<CategoryCount>>(["AllCategoryLength"], () => getAllCategoryLengthAPI(), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetOnePost = (id: number) => {
  return useQuery<PostType>(["Post", id], () => getOnePostAPI(id), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetPostNum = (category: string | string[] | undefined) => {
  return useQuery(["PostNum", category], () => getPostsNumAPI(category), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetCategoryPosts = (category: string | string[] | undefined, pageNum: number) => {
  return useQuery<Array<PostsType>>(["CategoryPost", category, pageNum], () => getCategoryPostAPI(category, pageNum), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetSearchPosts = (search: string | string[] | undefined) => {
  return useQuery<Array<PostsType>>(["SearchPost", search], () => getSearchPostAPI(search), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetTagPosts = (tag: string | string[] | undefined) => {
  return useQuery<Array<PostsType>>(["TagPost", tag], () => getTagPostAPI(tag), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

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

export const useGetTopViewsPosts = () => {
  return useQuery<TopViewsPost[]>(["TopViewsPosts"], () => GetTopViewsPostsAPI(), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
