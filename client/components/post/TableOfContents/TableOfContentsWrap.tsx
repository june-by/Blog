import React from "react";
import styles from "./styles.module.scss";
import Table from "./Table";
import { TableofContentsContainer } from "context/tableOfContents";
import TOCButton from "./TOCButton";
import { usePostContext } from "context/postContext";
import useExtractTOC from "./useExtractTOC";

const TableOfContentsWrap = () => {
  const { title: postTitle } = usePostContext();

  const { tableOfContents, isExtractComplete } = useExtractTOC({ postTitle });

  if (!isExtractComplete) {
    return <aside className={styles.TableOfContentsWrap} />;
  }

  if (!tableOfContents || tableOfContents.length === 0) {
    return null;
  }

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
