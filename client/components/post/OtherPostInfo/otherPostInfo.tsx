import { useRouter } from "next/router";
import React from "react";
import { useGetOnePost } from "Hooks/Post";
import { PostType } from "Types/post";
import OtherPost from "components/post/OtherPostInfo/OtherPost";
import styles from "./styles.module.scss";

const OtherPostInfo = () => {
  const router = useRouter();
  const { data, isLoading } = useGetOnePost(Number(router.query.id));

  const { mainPost, prevPost, nextPost } = data as PostType;
  if (isLoading) return <></>;

  return (
    <div className={styles.OtherPostInfoWrapper}>
      <div className={styles.OtherCategory}>
        <span>{`"${mainPost?.category}" 카테고리의 다른 게시글`}</span>
      </div>
      <OtherPost Post={nextPost} mode="next" />
      <OtherPost Post={prevPost} mode="prev" />
    </div>
  );
};

export default OtherPostInfo;
