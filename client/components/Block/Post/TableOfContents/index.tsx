import React, { useCallback } from "react";
import styles from "./styles.module.scss";
import useTableOfContents from "./useTableOfContents";

interface TopicStyleInterface {
  [key: string]: { marginLeft: string };
}

const TopicStyle: TopicStyleInterface = {
  H1: { marginLeft: "0" },
  H2: { marginLeft: "25px" },
  H3: { marginLeft: "25px" },
};

const getTopicStyle = (tagName: string) => TopicStyle[tagName];

const TableOfContents = ({ tableOfContents }: { tableOfContents: HTMLElement[] }) => {
  const gotoTopic = useCallback(
    (toc: HTMLElement) => () => {
      toc.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },
    []
  );

  const activeId = useTableOfContents(tableOfContents);

  return (
    <aside className={styles.TopicWrapper}>
      <div className={styles.TopicWrapper_second}>
        {tableOfContents?.length !== 0 &&
          tableOfContents.map((tocContent: HTMLElement, idx: number) => (
            <Toc
              idx={idx}
              tocElement={tocContent}
              onClick={gotoTopic}
              style={getTopicStyle(tocContent.tagName)}
              key={tocContent.innerText}
              isActive={idx === activeId}
            />
          ))}
      </div>
    </aside>
  );
};

interface TocProps {
  onClick: (topic: HTMLElement) => () => void;
  style: { marginLeft: string };
  tocElement: HTMLElement;
  idx: number;
  isActive: boolean;
}

function Toc({ onClick, style, tocElement, idx, isActive }: TocProps) {
  return (
    <nav
      id={String(idx)}
      className={isActive ? `${styles.activeToc}` : `${styles.inActiveToc}`}
      style={style}
      onClick={onClick(tocElement)}
    >
      {tocElement?.innerText}
    </nav>
  );
}

export default TableOfContents;
