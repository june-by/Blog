import React from "react";
import useGotoPage from "../../../Hooks/useGotoPage";
import { PostsType } from "../../../Types/Post";
import { dateForm } from "../../../utils/dateForm";
import { getPostThumbNail } from "../../../utils/getPostThumnail";
import PostTagBtn from "../PostTagBtn";
import styles from "./styles.module.scss";

const PostCard = ({ post }: { post: PostsType }) => {
  const gotoPage = useGotoPage();

  return (
    <div className={styles.PostCard} onClick={gotoPage(`/post/${post.id}`)}>
      <div className={styles.PostCard_imgWrapper}>
        <img src={post.thumbNailUrl && post.thumbNailUrl !== "null" ? post.thumbNailUrl : getPostThumbNail(post.category)} alt="category" />
      </div>
      <div className={styles.PostCard_titleBox}>
        <div className={styles.PostCard_titleBox_title}>
          <span>{post.title}</span>
        </div>
        <div className={styles.PostCard_titleBox_tagBox}>{post.Tags.length !== 0 && post.Tags.map((tag) => <PostTagBtn key={tag?.id} tag={tag} />)}</div>
        <div className={styles.PostCard_titleBox_createdAt}>
          <span>{dateForm(post.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
