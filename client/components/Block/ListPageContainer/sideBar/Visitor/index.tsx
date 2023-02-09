import React from "react";
import { useGetVisitor } from "Hooks/Visitor";
import styles from "./styles.module.scss";
import AsyncBoundary from "components/_hoc/AsyncErrorBoundary";
const Visitor = () => {
  return (
    <AsyncBoundary suspenseFallback={<VisitorSkeleton />} errorFallback={(props) => <></>}>
      <section className={styles.Visitor}>
        <VisitorInfo />
      </section>
    </AsyncBoundary>
  );
};

function VisitorInfo() {
  const { data } = useGetVisitor();

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
