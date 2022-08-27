import { useEffect } from "react";

const useGetTopics = (setTopicArr: React.Dispatch<React.SetStateAction<never[]>>) => {
  useEffect(() => {
    const $h1Tags = document.getElementsByTagName("h1");
    const $h2Tags = document.getElementsByTagName("h2");
    const $h3Tags = document.getElementsByTagName("h3");
    const tagArr = [];

    if ($h1Tags.length !== 0) {
      for (const tag of $h1Tags as any) {
        if (tag.innerText.length !== 1) {
          tagArr.push(tag);
        }
      }
    }

    if ($h2Tags.length !== 0) {
      for (const tag of $h2Tags as any) {
        if (tag.innerText.length !== 1) {
          tagArr.push(tag);
        }
      }
    }

    if ($h3Tags.length !== 0) {
      for (const tag of $h3Tags as any) {
        if (tag.innerText.length !== 1) {
          tagArr.push(tag);
        }
      }
    }

    tagArr.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    tagArr.shift();
    setTopicArr(tagArr as never);
  }, []);
};

export default useGetTopics;
