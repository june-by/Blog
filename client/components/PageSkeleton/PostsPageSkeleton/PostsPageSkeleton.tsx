import CategoryList from "components/posts/CategoryList";
import Contact from "components/posts/Contact";
import PostCardSkeletonList from "components/posts/postList/PostCardSkeletonList";
import PostSearchBox from "components/posts/postList/PostSearchBox";
import PostsListLayout from "components/posts/postList/layout";
import PostsListTitle from "components/shared/PostsListTitle";
import React from "react";

const PostsPageSkeleton = () => {
  return (
    <>
      <CategoryList />
      <PostsListLayout>
        <PostsListTitle />
        <PostSearchBox />
        <PostCardSkeletonList />
      </PostsListLayout>
      <Contact />
    </>
  );
};

export default PostsPageSkeleton;
