import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { makeTopicStyle } from "../../../../utils/makeTopicStyles";
import useNavBarScrolling from "../../../../Hooks/useNavBarScrolling";

const PostNavBar = ({ topicArr }: { topicArr: any }) => {
  const topicPosition = useMemo(() => [...topicArr.map((v: any) => v.getBoundingClientRect().top), Number.MAX_SAFE_INTEGER], [topicArr]);

  const gotoTopic = useCallback(
    (topic: any) => () => {
      topic.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },
    []
  );

  useNavBarScrolling(topicPosition);

  return (
    <div className={styles.TopicWrapper}>
      <div className={styles.TopicWrapper_second}>
        {topicArr?.length !== 0 &&
          topicArr.map((topic: any, idx: number) => {
            return (
              <div className={styles.topic} key={idx + 100} style={makeTopicStyle(topic.tagName)} onClick={gotoTopic(topic)} id={String(idx)}>
                {topic?.innerText}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PostNavBar;
