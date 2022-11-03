import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { OtherPostType } from "../../../Types/Post";
import styles from "./styles.module.scss";

interface Props {
  Post: OtherPostType;
  mode: string;
}

const OtherPost = ({ Post, mode }: Props) => {
  const { push } = useRouter();
  const gotoPost = useCallback(() => {
    if (!Post?.OtherId) return;
    return push(`/post/${Post.OtherId}`);
  }, []);
  return (
    <div data-testid="OtherPost" className={styles.OtherPost} onClick={gotoPost}>
      <div className={styles.description}>
        <span>{`${mode === "next" ? "다음" : "이전"}게시글`}</span>
      </div>
      <div className={styles.content}>
        <span>
          {Post.OtherId ? (
            <>
              <span>{Post.OtherTitle}</span>
            </>
          ) : (
            `${`${mode === "next" ? "다음" : "이전"}게시글이 없습니다 :(`}`
          )}
        </span>
      </div>
    </div>
  );
};

export default OtherPost;
