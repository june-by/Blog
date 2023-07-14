import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import PostTop from "./PostHeader";
import PostContent from "./PostContent";
import OtherPostInfo from "./OtherPostInfo";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { MainPost } from "Types/post";
import { PostContainer } from "context/postContext";

interface PostWrapProps {
  children: ReactNode;
  Post: MainPost;
}

const PostWrap = Object.assign(
  ({ children, Post }: PostWrapProps) => (
    <PostContainer Post={Post}>
      <main className={styles.PostWrap}>{children}</main>
    </PostContainer>
  ),
  {
    Header: PostTop,
    Content: PostContent,
    OtherPost: OtherPostInfo,
    CommentForm: CommentForm,
    Comments: CommentList,
  }
);

export default PostWrap;
