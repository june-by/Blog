import { getCategoryPostAPI, getOnePostAPI, getPostsNumAPI } from "./../../API/Post/index";
import { useQuery } from "react-query";
import { getMainPostsAPI } from "../../API/Post";

export const useGetMainPost = (pageNum: number) => {
  return useQuery(["MainPosts"], () => getMainPostsAPI(pageNum), {
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

export const useGetCategoryPosts = (category: string) => {
  return useQuery(["CategoryPost", category], () => getCategoryPostAPI(category), {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
