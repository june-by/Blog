import React, { ReactNode } from "react";
import PostContent from "./postContent";
import { PostContainer } from "@contexts/postContext";
import PostComments from "./postComments";
import RoutePostButtons from "./RoutePostButtons";
import { PostContextDataType } from "Types/post";
import PostAdminButtons from "./PostAdminButtons";
import PostTitle from "./postTitle";
import PostDate from "./postDate";
import PostCategory from "./postCategory";
import PostTags from "./postTags";
import PostViewCount from "./postViewCount";
import PostSeriesInfo from "./PostSeriesInfo";
import PostTableOfContents from "./TableOfContents/TableOfContentsWrap";

interface PostWrapProps {
  children: ReactNode;
  Post: PostContextDataType;
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
    SeriesInfo: PostSeriesInfo,
    Content: PostContent,
    TableOfContents: PostTableOfContents,
    RoutePostButtons: RoutePostButtons,
    Comments: PostComments,
  }
);

export default PostWrap;
