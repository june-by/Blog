"use client";

import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import FontAppliedElement from "@components/shared/FontAppliedElement";

interface Props {
  title: string;
  children: ReactNode;
}

const ArchiveContent = ({ children, title }: Props) => {
  return (
    <section className={styles.ArchiveContent}>
      <FontAppliedElement tagName="h2">{title}</FontAppliedElement>
      {children}
    </section>
  );
};

export default ArchiveContent;
