import CategoryList from "components/posts/CategoryList";
import Contact from "components/posts/Contact";
import PostCardSkeletonList from "components/posts/postList/PostCardSkeletonList";
import PostsListLayout from "components/posts/postList/layout";
import PostsPageLayout from "components/shared/PageLayout/PostsPageLayout/PostsPageLayout";
import React from "react";

const PostsPageSkeleton = () => {
  return (
    <PostsPageLayout>
      <>
        <CategoryList />
        <PostsListLayout>
          <PostCardSkeletonList />
        </PostsListLayout>
        <Contact />
      </>
    </PostsPageLayout>
  );
};

export default PostsPageSkeleton;
