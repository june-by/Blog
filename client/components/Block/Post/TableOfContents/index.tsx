import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styles from "./styles.module.scss";
import useNavBarScrolling from "./useNavBarScrolling";
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
    (topic: HTMLElement) => () => {
      topic.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },
    []
  );

  useTableOfContents(tableOfContents);

  return (
    <aside className={styles.TopicWrapper}>
      <div className={styles.TopicWrapper_second}>
        {tableOfContents?.length !== 0 &&
          tableOfContents.map((topic: HTMLElement, idx: number) => (
            <Contents
              idx={idx}
              topic={topic}
              onClick={gotoTopic}
              style={getTopicStyle(topic.tagName)}
              key={topic.innerText}
            />
          ))}
      </div>
    </aside>
  );
};

interface TopicProps {
  onClick: (topic: HTMLElement) => () => void;
  style: { marginLeft: string };
  topic: HTMLElement;
  idx: number;
}

function Contents({ onClick, style, topic, idx }: TopicProps) {
  return (
    <nav id={String(idx)} className={styles.topic} style={style} onClick={onClick(topic)}>
      {topic?.innerText}
    </nav>
  );
}

export default TableOfContents;
