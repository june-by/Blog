import { useCallback, useEffect } from "react";

const useNavBarScrolling = (topicPosition: any) => {
  const styleChange = useCallback(() => {
    for (let i = 0; i < topicPosition.length - 1; i++) {
      const scroll = window.scrollY;
      const idx = String(i);
      const targetElement = document.getElementById(idx);
      // console.log(scroll);
      if (scroll >= topicPosition[i] && scroll < topicPosition[i + 1]) {
        console.log("123");
        targetElement!.style.transform = "scale(1.1)";
        targetElement!.style.opacity = "1";
      } else {
        targetElement!.style.transform = "scale(1)";
        targetElement!.style.opacity = "0.8";
      }
    }
  }, [topicPosition]);

  useEffect(() => {
    console.log(topicPosition);

    window.addEventListener("scroll", styleChange);
    return () => {
      window.removeEventListener("scroll", styleChange);
    };
  }, [styleChange, topicPosition]);
};

export default useNavBarScrolling;
