import { useCallback, useEffect, useRef, useState } from "react";
import throttle from "utils/throttle";

interface Params {
  onScrollDown: () => void;
  onScrollUp: () => void;
}

const useScroll = ({ onScrollDown, onScrollUp }: Params) => {
  const [yPos, setYPos] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const deltaY = window.scrollY - yPos;

    setYPos(window.scrollY);

    const direction = deltaY > 0 ? "DOWN" : "UP";
    console.log(direction);
    switch (direction) {
      case "DOWN":
        onScrollDown();
        break;
      case "UP":
        onScrollUp();
        break;
    }
  }, [yPos]);

  const throttleScroll = throttle(handleScroll, 100);

  useEffect(() => {
    document.addEventListener("scroll", throttleScroll);

    return () => {
      document.removeEventListener("scroll", throttleScroll);
    };
  }, [throttleScroll]);
};

export default useScroll;
