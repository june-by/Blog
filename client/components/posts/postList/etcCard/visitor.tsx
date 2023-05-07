import { useGetVisitor } from "Hooks/Visitor";
import React from "react";
import styles from "./styles.module.scss";

const Visitor = () => {
  const { data: visitorData } = useGetVisitor();

  if (!visitorData) return null;

  return (
    <div className={styles.visitorCard}>
      <h3>방문</h3>
      <span>
        총 방문 : <strong>{visitorData?.totalVisitor}</strong>명
      </span>
      <span>
        오늘 방문 : <strong>{visitorData?.todayVisitor}</strong>명
      </span>
    </div>
  );
};

export default Visitor;
