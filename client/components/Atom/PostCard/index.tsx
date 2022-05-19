import React from "react";
import useGotoPage from "../../../Hooks/useGotoPage";
import { PostsType } from "../../../Types/Post";
import { dateForm } from "../../../utils/dateForm";
import { getPostThumbNail } from "../../../utils/getPostThumnail";
import styles from "./styles.module.scss";

const PostCard = ({ post }: { post: PostsType }) => {
  const gotoPage = useGotoPage();
  return (
    <div className={styles.PostCard} onClick={gotoPage(`/post/${post.id}`)}>
      <div className={styles.PostCard_imgWrapper}>
        <img src={getPostThumbNail(post.category)} />
      </div>
      <div className={styles.PostCard_titleBox}>
        <span>{post.title}</span>
        <div>
          <span>{dateForm(post.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
