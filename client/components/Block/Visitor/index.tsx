import React from "react";
import { useGetVisitor } from "Hooks/Visitor";
import styles from "./styles.module.scss";
const Visitor = () => {
  const { data, isLoading } = useGetVisitor();
  return (
    <section className={styles.Visitor}>
      {!isLoading ? (
        <article className={styles.info}>
          <span data-testid="totalVisitor">
            총 방문 : <strong>{data!.totalVisitor}</strong>명
          </span>
          <span data-testid="todayVisitor">
            오늘 방문 : <strong>{data!.todayVisitor}</strong>명
          </span>
        </article>
      ) : (
        <div className={styles.SkeletonWrapper}>
          <div className={styles.visitorSkeleton}></div>
          <div className={styles.visitorSkeleton}></div>
        </div>
      )}
    </section>
  );
};

export default Visitor;
