import React from "react";
import { useGetRecentTags } from "Hooks/Tag";
import styles from "./styles.module.scss";
import ErrorHelper from "../../../shared/errorHelper";
import { useRouter } from "next/router";

const RecentTags = () => {
  return (
    <section className={styles.RecentTags}>
      <h3>최근 태그</h3>
      <div className={styles.ListWrapper}>
        <RecentTagList />
      </div>
    </section>
  );
};

function RecentTagList() {
  const { data, isLoading, isError, error, refetch } = useGetRecentTags();

  if (isLoading) return <RecentTagSkeleton />;

  if (isError) return <ErrorHelper error={error} reset={refetch} />;

  return (
    <ul className={styles.tagsWrapper}>
      {data?.map((tag, idx) => (
        <TagIcon tag={tag} key={`RecentTag-${tag}${idx}`} />
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

function TagIcon({ tag }: { tag: string }) {
  const { push } = useRouter();

  const onClickTag = (tag: string) => () => {
    return push({
      pathname: "/posts",
      query: { tag },
    });
  };

  return (
    <li data-testid="tagIcon" key={tag} onClick={onClickTag(tag)} className={styles.TagIcon}>
      {tag}
    </li>
  );
}

export default RecentTags;
