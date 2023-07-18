import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import PostTop from "./PostHeader";
import PostContent from "./PostContent";
import OtherPostInfo from "./OtherPostInfo";
import { MainPost } from "Types/post";
import { PostContainer } from "context/postContext";
import Utterances from "./Utterances";

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
    Utterances: Utterances,
  }
);

export default PostWrap;
