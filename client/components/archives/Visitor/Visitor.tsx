import React from "react";
import styles from "./styles.module.scss";
import { VisitorAPIType } from "@Types/visitor";
const Visitor = ({ todayVisitor, totalVisitor }: VisitorAPIType) => {
  return (
    <div className={styles.Visitor}>
      <span>Total : {totalVisitor}</span>
      <span>Today : {todayVisitor}</span>
    </div>
  );
};

export default Visitor;
