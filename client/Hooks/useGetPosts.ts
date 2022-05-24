import { useRouter } from "next/router";
import { PostsType } from "../Types/Post";
import { useGetCategoryPosts, useGetSearchPosts, useGetTagPosts } from "./Post";

interface Props {
  pageNum: number;
}

type ReturnTypes = [PostsType[] | undefined, boolean];

const useGetPosts = ({ pageNum }: Props): ReturnTypes => {
  const { query } = useRouter();
  if (query.category) {
    const { data: CategoryPost, isLoading: categoryLoading } = useGetCategoryPosts(String(query.category), pageNum);
    return [CategoryPost, categoryLoading];
  } else if (query.search) {
    const { data: SearchPosts, isLoading: searchLoading } = useGetSearchPosts(String(query.search));
    return [SearchPosts, searchLoading];
  } else {
    const { data: TagPost, isLoading: tagLoading } = useGetTagPosts(String(query.tag));
    return [TagPost, tagLoading];
  }
};

export default useGetPosts;
