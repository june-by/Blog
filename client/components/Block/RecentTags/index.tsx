import React, { useContext } from "react";
import { useGetRecentTags } from "../../../Hooks/Tag";
import { ThemeContext } from "../../../utils/ThemeContext";
import TagIcon from "../../Atom/TagIcon";
import styles from "./styles.module.scss";

const RecentTags = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useGetRecentTags();
  return (
    <div className={`${styles.RecentTags} ${styles[String(theme)]}`}>
      <h3>최근 태그</h3>
      {!isLoading ? (
        <div className={styles.tagsWrapper}>
          {data?.map((tag) => (
            <TagIcon tag={tag} />
          ))}
        </div>
      ) : (
        <div className={styles.SkeletonWrapper}>
          <div className={styles.visitorSkeleton}></div>
          <div className={styles.visitorSkeleton}></div>
        </div>
      )}
    </div>
  );
};

export default RecentTags;
