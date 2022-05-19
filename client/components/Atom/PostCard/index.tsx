import React from "react";
import { PostsType } from "../../../Types/Post";
import { getPostThumbNail } from "../../../utils/getPostThumnail";
import styles from "./styles.module.scss";

const PostCard = ({ post }: { post: PostsType }) => {
  return (
    <div className={styles.PostCard}>
      <div className={styles.PostCard_imgWrapper}>
        <img src={getPostThumbNail(post.category)} />
      </div>
      <div className={styles.PostCard_titleBox}>
        <span>{post.title}</span>
      </div>
    </div>
  );
};

export default PostCard;
