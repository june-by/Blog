import React from "react";
import styles from "./styles.module.scss";
import Table from "./Table";
import TOCButton from "./TOCButton";
import { TableofContentsContainer } from "context/tableOfContents";

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
    </TableofContentsContainer>
  );
};

export default TableOfContentsWrap;
