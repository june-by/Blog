"use client";

import { useGetVisitor } from "@hooks/query";
import React from "react";
import styles from "./styles.module.scss";
const Visitor = () => {
  const { data, isLoading } = useGetVisitor();

  if (isLoading || !data) {
    return null;
  }

  return (
    <div className={styles.Visitor}>
      <span>Total : {data.totalVisitor}</span>
      <span>Today : {data.todayVisitor}</span>
    </div>
  );
};

export default Visitor;
