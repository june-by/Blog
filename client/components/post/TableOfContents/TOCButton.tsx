import React, { useCallback, useRef } from "react";
import styles from "./styles.module.scss";
import useScroll from "Hooks/useScroll";

const TOCButton = () => {
  const TOCButtonRef = useRef<HTMLButtonElement | null>(null);

  const hideButton = useCallback(() => {
    if (!TOCButtonRef.current) {
      return;
    }
    TOCButtonRef.current.style.marginRight = "-50px";
  }, []);

  const showButton = useCallback(() => {
    if (!TOCButtonRef.current) {
      return;
    }
    TOCButtonRef.current.style.marginRight = "0px";
  }, []);

  useScroll({ onScrollDown: hideButton, onScrollUp: showButton });
  return (
    <button ref={TOCButtonRef} className={styles.TOCButton}>
      TOC
    </button>
  );
};

export default TOCButton;
