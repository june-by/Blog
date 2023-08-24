import React from "react";
import CategoryList from "./CategoryList";
import PostList from "./postList";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
import Contact from "./Contact";
interface Props {
  params?: any;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
}
const PostsPageContainer = (props: Props) => {
  return (
    <>
      <CategoryList />
      <PostList {...props} />
      <Contact />
    </>
  );
};

export default PostsPageContainer;
