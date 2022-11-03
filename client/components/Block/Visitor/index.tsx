import React, { useContext } from "react";
import { useGetVisitor } from "../../../hooks/Visitor";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";
const Visitor = () => {
  const { data, isLoading } = useGetVisitor();
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.Visitor} ${styles[String(theme)]}`}>
      {!isLoading ? (
        <div className={styles.info}>
          <div>
            총 방문 : <strong>{data!.totalVisitor}</strong>명
          </div>
          <div>
            오늘 방문 : <strong>{data!.todayVisitor}</strong>명
          </div>
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

export default Visitor;
