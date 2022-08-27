import { useEffect } from "react";

const useNavBarScrolling = (topicPosition: any) => {
  const consoleLogScoll = () => {
    for (let i = 0; i < topicPosition.length - 1; i++) {
      const scroll = window.scrollY;
      if (scroll >= topicPosition[i] && scroll < topicPosition[i + 1]) {
        document.getElementById(String(i))!.style.transform = "scale(1.1)";
        document.getElementById(String(i))!.style.opacity = "1";
      } else {
        document.getElementById(String(i))!.style.transform = "scale(1)";
        document.getElementById(String(i))!.style.opacity = "0.8";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", consoleLogScoll);
    return () => {
      window.removeEventListener("scroll", consoleLogScoll);
    };
  }, [topicPosition]);
};

export default useNavBarScrolling;
