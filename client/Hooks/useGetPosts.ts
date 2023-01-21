/* eslint-disable react-hooks/rules-of-hooks */
import { ParsedUrlQuery } from "querystring";
import { PostsType } from "Types/post";
import { useGetSearchPosts, useGetTagPosts } from "./Post";

type ReturnTypes = [PostsType[] | undefined, boolean];

const useGetPosts = (query: ParsedUrlQuery): ReturnTypes => {
  if (query.search) {
    const { data: SearchPosts, isLoading: SearchLoading } = useGetSearchPosts(query.search);
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
