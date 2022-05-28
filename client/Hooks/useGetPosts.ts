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
  } else if (query.tag) {
    const { data: TagPost, isLoading: tagLoading } = useGetTagPosts(String(query.tag));
    return [TagPost, tagLoading];
  } else {
    return [[DummyPosts], true];
  }
};

const DummyPosts = {
  category: "",
  createdAt: new Date(),
  id: 0,
  title: "",
  Tags: [null],
  thumbNailUrl: null,
};

export default useGetPosts;
