import { useRouter } from "next/router";
import { PostsType } from "../Types/Post";
import { useGetCategoryPosts, useGetSearchPosts, useGetTagPosts } from "./Post";

type ReturnTypes = [PostsType[] | undefined, boolean];

const useGetPosts = (): ReturnTypes => {
  const { query } = useRouter();
  const page = Number(query.page);
  const { data: CategoryPost, isLoading: CategoryLoading } = useGetCategoryPosts(query.category, page);
  const { data: SearchPosts, isLoading: SearchLoading } = useGetSearchPosts(query.search);
  const { data: TagPost, isLoading: TagLoading } = useGetTagPosts(query.tag);
  if (query.category) return [CategoryPost, CategoryLoading];
  else if (query.search) return [SearchPosts, SearchLoading];
  else if (query.tag) return [TagPost, TagLoading];
  else return [DummyPosts, false];
};

const DummyPosts = [
  {
    category: "",
    createdAt: new Date(),
    id: 0,
    title: "",
    Tags: [null],
    thumbNailUrl: null,
    views: 1,
  },
];

export default useGetPosts;
