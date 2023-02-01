import React from "react";
import { useGetRecentTags } from "Hooks/Tag";
import TagIcon from "components/Atom/TagIcon";
import styles from "./styles.module.scss";
import AsyncBoundary from "components/_hoc/AsyncErrorBoundary";
import ErrorHelper from "../errorHelper";

const RecentTags = () => {
  return (
    <section className={styles.RecentTags}>
      <h3>최근 태그</h3>
      <div className={styles.ListWrapper}>
        <AsyncBoundary suspenseFallback={<RecentTagSkeleton />} errorFallback={(props) => <ErrorHelper {...props} />}>
          <RecentTagList />
        </AsyncBoundary>
      </div>
    </section>
  );
};

function RecentTagList() {
  const { data } = useGetRecentTags();

  return (
    <ul className={styles.tagsWrapper}>
      {data?.map((tag, idx) => (
        <TagIcon key={`#${tag}`} tag={tag} />
      ))}
    </ul>
  );
}

function RecentTagSkeleton() {
  return (
    <div className={styles.SkeletonWrapper}>
      <div className={styles.visitorSkeleton}></div>
      <div className={styles.visitorSkeleton}></div>
    </div>
  );
}

export default RecentTags;
