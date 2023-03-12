import React from "react";
import { useGetVisitor } from "Hooks/Visitor";
import styles from "./styles.module.scss";
const Visitor = () => {
  return (
    <section className={styles.Visitor}>
      <VisitorInfo />
    </section>
  );
};

function VisitorInfo() {
  const { data, isLoading, isError } = useGetVisitor();

  if (isError) return <></>;
  if (isLoading) return <VisitorSkeleton />;

  return (
    <article className={styles.info}>
      <span data-testid="totalVisitor">
        총 방문 : <strong>{data?.totalVisitor || 0}</strong>명
      </span>
      <span data-testid="todayVisitor">
        오늘 방문 : <strong>{data?.todayVisitor || 0}</strong>명
      </span>
    </article>
  );
}

function VisitorSkeleton() {
  return (
    <div className={styles.SkeletonWrapper}>
      <div className={styles.visitorSkeleton}></div>
      <div className={styles.visitorSkeleton}></div>
    </div>
  );
}

export default Visitor;
