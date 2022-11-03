import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useGetOnePost } from "../../../../hooks/Post";
import { OtherPostType } from "../../../../types/Post";
import { ThemeContext } from "../../../../utils/ThemeContext";
import OtherPost from "../../../atom/OtherPost";
import styles from "./styles.module.scss";

const OtherPostInfo = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { data } = useGetOnePost(Number(router.query.id));
  const mainPost = data?.mainPost;
  const prevPost = data?.prevPost;
  const nextPost = data?.nextPost;

  return (
    <div className={`${styles.OtherPostInfoWrapper} ${styles[String(theme)]}`}>
      <div className={styles.OtherCategory}>
        <span>{`"${mainPost?.category}" 카테고리의 다른 게시글`}</span>
      </div>
      <OtherPost Post={nextPost as OtherPostType} mode="next" />
      <OtherPost Post={prevPost as OtherPostType} mode="prev" />
    </div>
  );
};

export default OtherPostInfo;
