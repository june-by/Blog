import React, { useCallback } from "react";
import useTableOfContents from "./useTableOfContents";
import Row from "./Row";

interface Props {
  tableOfContents: HTMLElement[];
}

const Table = ({ tableOfContents }: Props) => {
  const activeContentId = useTableOfContents(tableOfContents);

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
