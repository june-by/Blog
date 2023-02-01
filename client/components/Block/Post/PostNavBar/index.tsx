import React, { useCallback, useMemo, useRef } from "react";
import styles from "./styles.module.scss";
import useNavBarScrolling from "./useNavBarScrolling";

interface TopicStyleInterface {
  [key: string]: { marginLeft: string };
}

const TopicStyle: TopicStyleInterface = {
  H1: { marginLeft: "0" },
  H2: { marginLeft: "25px" },
  H3: { marginLeft: "25px" },
};

const getTopicStyle = (tagName: string) => TopicStyle[tagName];

const PostNavBar = ({ topicArr }: { topicArr: HTMLElement[] }) => {
  const topicPosition = [...topicArr.map((v: any) => v.getBoundingClientRect().top), Number.MAX_SAFE_INTEGER];

  const gotoTopic = useCallback(
    (topic: HTMLElement) => () => {
      topic.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },
    []
  );
  useNavBarScrolling(topicPosition);

  return (
    <aside className={styles.TopicWrapper}>
      <div className={styles.TopicWrapper_second}>
        {topicArr?.length !== 0 &&
          topicArr.map((topic: HTMLElement) => (
            <Topic topic={topic} onClick={gotoTopic} style={getTopicStyle(topic.tagName)} key={topic.innerText} />
          ))}
      </div>
    </aside>
  );
};

interface TopicProps {
  onClick: (topic: HTMLElement) => () => void;
  style: { marginLeft: string };
  topic: HTMLElement;
}

function Topic({ onClick, style, topic }: TopicProps) {
  return (
    <nav className={styles.topic} style={style} onClick={onClick(topic)}>
      {topic?.innerText}
    </nav>
  );
}

export default PostNavBar;
