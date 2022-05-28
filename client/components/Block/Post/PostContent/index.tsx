import React, { useCallback, useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import Script from "next/script";
import styles from "./styles.module.scss";
import "highlight.js/styles/atom-one-dark.css";
import useGetTopicArr from "../../../../Hooks/useGetTopicArr";
import { makeTopicStyle } from "../../../../utils/makeTopicStyles";
const PostContent = ({ content }: { content: string }) => {
  const topicRef = useRef<HTMLDivElement>(null);

  const [topicArr, setTopicArr] = useState([]);
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  useEffect(() => {
    const $preTags = document.getElementsByTagName("pre");
    for (const tag of $preTags as any) {
      tag.className += " hljs";
    }
  }, []);

  const gotoTopic = useCallback(
    (topic: any) => () => {
      topic.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    },
    []
  );

  useGetTopicArr(setTopicArr);

  return (
    <div className={styles.PostContent}>
      <Script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></Script>
      <div className={`Code ${styles.Content}`} dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className={styles.TopicWrapper}>
        <div className={styles.TopicWrapper_second} ref={topicRef}>
          {topicArr?.length !== 0 &&
            topicArr.map((topic: any, idx: number) => {
              console.log(topic.tagName);
              return (
                <div key={idx + 100} style={makeTopicStyle(topic.tagName)} onClick={gotoTopic(topic)}>
                  {topic?.innerText}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostContent;
