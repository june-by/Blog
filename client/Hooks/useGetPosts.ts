import { ParsedUrlQuery } from "querystring";
import { PostsType } from "Types/Post";
import { useGetCategoryPosts, useGetSearchPosts, useGetTagPosts } from "./Post";

type ReturnTypes = [PostsType[] | undefined, boolean];

const useGetPosts = (query: ParsedUrlQuery): ReturnTypes => {
  const page = Number(query.page);
  if (query.category) {
    const { data: CategoryPost, isLoading: CategoryLoading } =
      useGetCategoryPosts(query.category, page);
    return [CategoryPost, CategoryLoading];
  } else if (query.search) {
    const { data: SearchPosts, isLoading: SearchLoading } = useGetSearchPosts(
      query.search
    );
    return [SearchPosts, SearchLoading];
  } else if (query.tag) {
    const { data: TagPost, isLoading: TagLoading } = useGetTagPosts(query.tag);
    return [TagPost, TagLoading];
  } else return [DummyPosts, false];
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
