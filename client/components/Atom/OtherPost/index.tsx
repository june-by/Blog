import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { OtherPostType } from "Types/post";
import styles from "./styles.module.scss";

interface Props {
  Post: OtherPostType;
  mode: string;
}

const OtherPost = ({ Post, mode }: Props) => {
  const { push } = useRouter();
  const alertNoPost = useCallback(() => {
    alert(`${mode === "next" ? "다음" : "이전"}게시글이 없습니다 :(`);
  }, []);
  return (
    <div data-testid="OtherPost" className={styles.OtherPost}>
      <div className={styles.description}>
        <span>{`${mode === "next" ? "다음" : "이전"}게시글`}</span>
      </div>
      <div className={styles.content}>
        <span>
          {Post.OtherId ? (
            <>
              <Link href={`/post/${Post.OtherId}`}>{Post.OtherTitle}</Link>
            </>
          ) : (
            <div onClick={alertNoPost}>`${`${mode === "next" ? "다음" : "이전"}게시글이 없습니다 :(`}`</div>
          )}
        </span>
      </div>
    </div>
  );
};

export default OtherPost;
