import { useEffect, useRef, useState } from "react";

export default function useTableOfContents(contents: HTMLElement[]) {
  const [activeIdx, setActiveIdx] = useState(0);
  const intersectingListRef = useRef<boolean[]>([]);
  const intersectingList = intersectingListRef.current;

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserverInit) => {
      entries.forEach(({ target, isIntersecting }) => {
        const idx = Number((target as HTMLElement).dataset.id || 0);
        intersectingList[idx] = isIntersecting;
      });

      const currentIdx = intersectingList.findIndex((item) => item);
      console.log("currentIdx : ", currentIdx);

      if (currentIdx !== -1) {
        let activeIdx = currentIdx - 1;
        if (currentIdx === 0) activeIdx = 0;
        setActiveIdx(activeIdx);
      }

      //   if (currentIdx === -1) activeIdx = intersectingList.length - 1;
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 1 });

    contents.forEach((content, idx) => {
      content.setAttribute("data-id", idx.toString());
      intersectingList.push(false);
      observer.observe(content);
    });

    return () => {
      observer.disconnect();
      intersectingList.length = 0;
    };
  }, []);

  useEffect(() => {
    contents.forEach((contentElement, idx) => {
      console.log(contentElement, idx);
      const targetElement = document.getElementById(String(idx));
      if (idx === activeIdx) {
        targetElement!.style.transform = "scale(1.1)";
        targetElement!.style.opacity = "1";
      } else {
        targetElement!.style.transform = "scale(1)";
        targetElement!.style.opacity = "0.8";
      }
    });
    // if (targetElement) {

    // }
  }, [activeIdx]);
}
