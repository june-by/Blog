import React, { useCallback, useMemo } from "react";
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

const PostNavBar = ({ topicArr }: { topicArr: any }) => {
  const topicPosition = useMemo(
    () => [...topicArr.map((v: any) => v.getBoundingClientRect().top), Number.MAX_SAFE_INTEGER],
    [topicArr]
  );

  const gotoTopic = useCallback(
    (topic: any) => () => {
      topic.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    },
    []
  );

  useNavBarScrolling(topicPosition);

  return (
    <section className={styles.TopicWrapper}>
      <div className={styles.TopicWrapper_second}>
        {topicArr?.length !== 0 &&
          topicArr.map((topic: any, idx: number) => {
            return (
              <nav
                className={styles.topic}
                key={idx + 100}
                style={getTopicStyle(topic.tagName)}
                onClick={gotoTopic(topic)}
                id={String(idx)}
              >
                {topic?.innerText}
              </nav>
            );
          })}
      </div>
    </section>
  );
};

export default PostNavBar;
