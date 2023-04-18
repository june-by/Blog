import Link from "next/link";
import React from "react";
import { OtherPostType } from "Types/post";
import styles from "./styles.module.scss";

interface Props {
  Post: OtherPostType;
  mode: string;
}

const OtherPost = ({ Post, mode }: Props) => {
  const alertNoPost = () => {
    alert(`${getTextByMode(mode)}게시글이 없습니다 :(`);
  };

  return (
    <div data-testid="OtherPost" className={styles.OtherPost}>
      <div className={styles.description}>
        <span>{`${getTextByMode(mode)}게시글`}</span>
      </div>
      <div className={styles.content}>
        <span>
          {Post.OtherId ? (
            <Link href={`/post/${Post.OtherId}`}>{Post.OtherTitle}</Link>
          ) : (
            <span onClick={alertNoPost}>{`${getTextByMode(mode)}게시글이 없습니다 :(`}</span>
          )}
        </span>
      </div>
    </div>
  );
};

function getTextByMode(mode: string) {
  return mode === "next" ? "다음" : "이전";
}

export default OtherPost;
