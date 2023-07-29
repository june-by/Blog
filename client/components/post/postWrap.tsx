import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import PostTop from "./PostHeader";
import PostContent from "./PostContent";
import { MainPost } from "Types/post";
import { PostContainer } from "context/postContext";
import Comments from "./Comments";
import RoutePostButtons from "./RoutePostButtons";
import PostSkeleton from "./Skeleton";
import PostPageLayout from "components/shared/PageLayout/PostPageLayout";

interface PostWrapProps {
  children: JSX.Element;
  Post: MainPost;
}

const PostWrap = Object.assign(
  ({ children, Post }: PostWrapProps) => (
    <PostContainer Post={Post}>
      <PostPageLayout>{children}</PostPageLayout>
    </PostContainer>
  ),
  {
    Header: PostTop,
    Content: PostContent,
    RoutePostButtons: RoutePostButtons,
    Comments: Comments,
    Skeleton: PostSkeleton,
  }
);

export default PostWrap;
