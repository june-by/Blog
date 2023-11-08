import React from "react";
import styles from "./styles.module.scss";
import "highlight.js/styles/panda-syntax-dark.css";
import classnames from "classnames";
import { PostType } from "@Types/post";

const PostContent = ({ content }: Pick<PostType, "content">) => {
  return (
    <>
      <article
        className={classnames("Code", styles.PostContent)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
};

export default PostContent;
