import { useRouter } from "next/router";
import React, { useContext, useMemo } from "react";
import { useGetOnePost } from "Hooks/Post";
import { OtherPostType } from "Types/Post";
import { ThemeContext } from "utils/ThemeContext";
import OtherPost from "components/Atom/OtherPost";
import styles from "./styles.module.scss";

const OtherPostInfo = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useGetOnePost(Number(router.query.id));
  const mainPost = useMemo(() => data?.mainPost, [data]);
  const prevPost = useMemo(() => data?.prevPost, [data]);
  const nextPost = useMemo(() => data?.nextPost, [data]);

  /*
    실질적으로 SSR과정에서 useGetOnePosts에 해당하는 데이터를 가져오기 떄문에
    랜더링 과정에서 isLoading이 true인 경우는 없지만,
    테스트 과정에서 isLoading에 대한 처리를 하지 않을 경우,
    에러가 발생하기 때문에, 이에 대한 조건문을 넣음
  */
  if (isLoading) return <></>;

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
