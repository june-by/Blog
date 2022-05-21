import { AddCommentAPI, AddPostAPI, DeletePostAPI, getCategoryPostAPI, getOnePostAPI, getPostsNumAPI, getSearchPostAPI } from "./../../API/Post/index";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMainPostsAPI } from "../../API/Post";
import { PostsType } from "../../Types/Post";
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
  return useQuery(["Post", id], () => getOnePostAPI(id), {
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

export const useAddPost = () => {
  return useMutation(AddPostAPI, {
    onSuccess: () => {
      alert("게시글 등록 성공");
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
