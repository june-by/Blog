import throttle from "@/utils/throttle";
import { useCallback, useEffect, useMemo, useRef } from "react";

interface Params {
  onScroll?: () => void;
  onScrollDown?: () => void;
  onScrollUp?: () => void;
}

const useVerticalScrollHandler = ({ onScroll, onScrollDown, onScrollUp }: Params) => {
  const yPos = useRef(typeof window === "undefined" ? 0 : window.scrollY);

  const throttleScroll = useMemo(() => {
    const handleScroll = () => {
      const deltaY = window.scrollY - yPos.current;

      yPos.current = window.scrollY;

      const direction = scrollY > 0 && deltaY >= 0 ? "DOWN" : "UP";

      onScroll?.();

      switch (direction) {
        case "DOWN":
          onScrollDown?.();
          break;
        case "UP":
          onScrollUp?.();
          break;
      }
    };
    return throttle(handleScroll, 100);
  }, [onScroll, onScrollDown, onScrollUp]);

  useEffect(() => {
    document.addEventListener("scroll", throttleScroll);

    return () => {
      document.removeEventListener("scroll", throttleScroll);
    };
  }, [throttleScroll]);
};

export default useVerticalScrollHandler;
