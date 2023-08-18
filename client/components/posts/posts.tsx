import React from "react";
import CategoryList from "./CategoryList";
import PostList from "./postList";
import { UseInfiniteQueryResult } from "react-query";
import { PostsType } from "Types/post";
import Contact from "./Contact";
import PostsPageLayout from "components/shared/PageLayout/PostsPageLayout";
interface Props {
  params?: any;
  title: string;
  query: (params: any) => UseInfiniteQueryResult<PostsType[], unknown>;
}
const PostsPageContainer = (props: Props) => {
  return (
    <PostsPageLayout>
      <>
        <CategoryList />
        <PostList {...props} />
        <Contact />
      </>
    </PostsPageLayout>
  );
};

export default PostsPageContainer;
