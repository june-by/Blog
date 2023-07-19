import React from "react";
import styles from "./styles.module.scss";
import Table from "./Table";

interface Props {
  tableOfContents: HTMLElement[];
}

const TableOfContentsWrap = ({ tableOfContents }: Props) => {
  if (!tableOfContents || tableOfContents.length === 0) return null;

  return (
    <aside className={styles.TableOfContentsWrap}>
      <Table tableOfContents={tableOfContents} />
    </aside>
  );
};

export default TableOfContentsWrap;
