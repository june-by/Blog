import React, { useContext } from "react";
import { useGetRecentTags } from "Hooks/Tag";
import { ThemeContext } from "components/_hoc/themeContext";
import TagIcon from "components/Atom/TagIcon";
import styles from "./styles.module.scss";

const RecentTags = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useGetRecentTags();
  return (
    <section className={`${styles.RecentTags} ${styles[String(theme)]}`}>
      <h3>최근 태그</h3>
      {!isLoading ? (
        <ul className={styles.tagsWrapper}>
          {data?.map((tag, idx) => (
            <TagIcon key={tag + idx} tag={tag} />
          ))}
        </ul>
      ) : (
        <div className={styles.SkeletonWrapper}>
          <div className={styles.visitorSkeleton}></div>
          <div className={styles.visitorSkeleton}></div>
        </div>
      )}
    </section>
  );
};

export default RecentTags;
