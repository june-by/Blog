import React from "react";
import styles from "./styles.module.scss";
import Table from "./Table";
import { TableofContentsContainer } from "context/tableOfContents";
import TOCButton from "./TOCButton";

interface Props {
  tableOfContents: HTMLElement[];
}

const TableOfContentsWrap = ({ tableOfContents }: Props) => {
  if (!tableOfContents || tableOfContents.length === 0) return null;

  return (
    <TableofContentsContainer tableOfContents={tableOfContents}>
      <aside className={styles.TableOfContentsWrap}>
        <Table />
      </aside>
      <div className={styles.TOCButtonWrap}>
        <TOCButton />
      </div>
    </TableofContentsContainer>
  );
};

export default TableOfContentsWrap;
