import {
  AddCommentAPI,
  AddPostAPI,
  DeletePostAPI,
  EditPostAPI,
  getCategoryPostAPI,
  getOnePostAPI,
  getPostsNumAPI,
  getSearchPostAPI,
  getTagPostAPI,
} from "./../../API/Post/index";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMainPostsAPI } from "../../API/Post";
import { AddPostParams, PostsType, PostType } from "../../Types/Post";
import { useRouter } from "next/router";

export const useGetMainPost = (pageNum: number) => {
  return useQuery<Array<PostsType>>(["MainPosts", pageNum], () => getMainPostsAPI(pageNum), {
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

export const useGetPostNum = (Category: string) => {
  return useQuery(["PostNum", Category], () => getPostsNumAPI(Category), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetCategoryPosts = (category: string, pageNum: number) => {
  return useQuery<Array<PostsType>>(["CategoryPost", category, pageNum], () => getCategoryPostAPI(category, pageNum), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetSearchPosts = (search: string) => {
  return useQuery<Array<PostsType>>(["SearchPost", search], () => getSearchPostAPI(search), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useGetTagPosts = (tag: string) => {
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
      return window.location.replace("/");
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

export const useAddComment = () => {
  return useMutation(AddCommentAPI, {
    onSuccess: () => {
      return alert("댓글 등록 성공");
    },
  });
};
