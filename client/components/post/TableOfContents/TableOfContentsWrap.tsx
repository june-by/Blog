"use client";

import React from "react";
import styles from "./styles.module.scss";
import Table from "./Table";
import { TableofContentsContainer } from "@contexts/tableOfContents";
import TOCButton from "./TOCButton";
import useExtractTOC from "./useExtractTOC";
import { PostType } from "@Types/post";

const TableOfContentsWrap = ({ title: postTitle }: Pick<PostType, "title">) => {
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
