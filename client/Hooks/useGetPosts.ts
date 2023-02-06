/* eslint-disable react-hooks/rules-of-hooks */
import { ParsedUrlQuery } from "querystring";
import { PostsType } from "Types/post";
import { useGetSearchPosts, useGetTagPosts } from "./Post";

type ReturnTypes = [PostsType[] | undefined, boolean, boolean, Function];

const useGetPosts = (query: ParsedUrlQuery): ReturnTypes => {
  if (query.search) {
    const { data: SearchPosts, isLoading: SearchLoading, isError, refetch } = useGetSearchPosts(query.search);
    return [SearchPosts, SearchLoading, isError, refetch];
  } else if (query.tag) {
    const { data: TagPost, isLoading: TagLoading, isError, refetch } = useGetTagPosts(query.tag);
    return [TagPost, TagLoading, isError, refetch];
  } else return [DummyPosts, false, false, () => {}];
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
    isPublic: 1,
  },
];

export default useGetPosts;
