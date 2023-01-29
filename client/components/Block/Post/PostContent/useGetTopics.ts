import { useEffect, useState } from "react";

const useGetTopics = () => {
  const [topicArr, setTopicArr] = useState<HTMLElement[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const tagArr = ["h1", "h2", "h3"].reduce(
        (acc: HTMLElement[], cur: string) => [...acc, ...getElementsByTagName(cur)],
        []
      );
      tagArr.shift();
      tagArr.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
      setTopicArr(tagArr as HTMLElement[]);
      setLoading(false);
    }, 10);
  }, []);

  return { topicArr, loading };
};

export default useGetTopics;

function getElementsByTagName(tagName: string) {
  const $tags = document.getElementsByTagName(tagName);
  const tagArray = [];
  if ($tags.length !== 0) {
    for (const tag of $tags as unknown as HTMLElement[]) {
      if (tag?.innerText?.length !== 1) tagArray.push(tag);
    }
  }
  return tagArray;
}
