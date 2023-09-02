import React from "react";
import PostTop from "./PostHeader";
import PostContent from "./PostContent";
import { PostContainer } from "context/postContext";
import Comments from "./Comments";
import RoutePostButtons from "./RoutePostButtons";
import { PostType } from "Types/post";
import PostAdminButtons from "./PostAdminButtons";

interface PostWrapProps {
  children: JSX.Element;
  Post: PostType;
}

const PostWrap = Object.assign(
  ({ children, Post }: PostWrapProps) => (
    <PostContainer Post={Post}>{children}</PostContainer>
  ),
  {
    Header: PostTop,
    AdminButtons: PostAdminButtons,
    Content: PostContent,
    RoutePostButtons: RoutePostButtons,
    Comments: Comments,
  }
);

export default PostWrap;
