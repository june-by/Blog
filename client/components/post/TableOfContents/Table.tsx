import React, { useCallback } from "react";
import Row from "./Row";
import { useTableOfContentsContext } from "@contexts/tableOfContents";

const Table = () => {
  const { tableOfContents, activeId: activeContentId } =
    useTableOfContentsContext();

  const handleClickContent = useCallback(
    (toc: HTMLElement) => () => {
      toc.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    []
  );

  return (
    <>
      {tableOfContents.map((tocContent: HTMLElement, idx: number) => (
        <Row
          idx={idx}
          tocElement={tocContent}
          onClick={handleClickContent}
          key={tocContent.innerText}
          isActive={idx === activeContentId}
        />
      ))}
    </>
  );
};

export default Table;
