import { useRouter } from "next/router";
import React, { useCallback } from "react";
import useGotoPage from "../../../Hooks/useGotoPage";
import { PostsType } from "../../../Types/Post";
import { dateForm } from "../../../utils/dateForm";
import { getPostThumbNail } from "../../../utils/getPostThumnail";
import styles from "./styles.module.scss";

const PostCard = ({ post }: { post: PostsType }) => {
  const gotoPage = useGotoPage();
  const router = useRouter();
  const onClickTag = useCallback(
    (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, tag: string) => {
      e.stopPropagation();
      return router.push({
        pathname: "/filter",
        query: { tag: tag },
      });
    },
    [router]
  );
  return (
    <div className={styles.PostCard} onClick={gotoPage(`/post/${post.id}`)}>
      <div className={styles.PostCard_imgWrapper}>
        <img src={getPostThumbNail(post.category)} alt="category" />
      </div>
      <div className={styles.PostCard_titleBox}>
        <div className={styles.PostCard_titleBox_title}>
          <span>{post.title}</span>
        </div>
        <div className={styles.PostCard_titleBox_tagBox}>
          {post.Tags.length !== 0 &&
            post.Tags.map((tag) => {
              return (
                <span key={tag?.id} onClick={(e) => onClickTag(e, String(tag?.content))}>
                  #{tag?.content}{" "}
                </span>
              );
            })}
        </div>
        <div className={styles.PostCard_titleBox_createdAt}>
          <span>{dateForm(post.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
