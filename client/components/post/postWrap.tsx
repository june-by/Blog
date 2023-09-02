import React from "react";
import PostContent from "./PostContent";
import { PostContainer } from "context/postContext";
import Comments from "./Comments";
import RoutePostButtons from "./RoutePostButtons";
import { PostType } from "Types/post";
import PostAdminButtons from "./PostAdminButtons";
import PostTitle from "./postTitle";
import PostDate from "./postDate";
import PostCategory from "./postCategory";
import PostTags from "./postTags";
import PostViewCount from "./postViewCount";

interface PostWrapProps {
  children: JSX.Element;
  Post: PostType;
}

const PostWrap = Object.assign(
  ({ children, Post }: PostWrapProps) => (
    <PostContainer Post={Post}>{children}</PostContainer>
  ),
  {
    AdminButtons: PostAdminButtons,
    Title: PostTitle,
    Date: PostDate,
    Tags: PostTags,
    ViewCount: PostViewCount,
    Category: PostCategory,
    Content: PostContent,
    RoutePostButtons: RoutePostButtons,
    Comments: Comments,
  }
);

export default PostWrap;
