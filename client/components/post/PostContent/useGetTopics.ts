import { useEffect, useState } from "react";

const BlogTitle = "ByJuun.";

const useGetTopics = ({ postTitle }: { postTitle: string }) => {
  const [tableOfContents, setTableOfContents] = useState<HTMLElement[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const tagArr = ["h1", "h2", "h3"]
        .reduce((acc: HTMLElement[], cur: string) => [...acc, ...getElementsByTagName(cur)], [])
        .filter((tag) => tag.textContent !== BlogTitle)
        .filter((tag) => tag.textContent !== postTitle);

      tagArr.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
      setTableOfContents(tagArr as HTMLElement[]);
      setLoading(false);
    }, 10);
  }, []);

  return { tableOfContents, loading };
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
