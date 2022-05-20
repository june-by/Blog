import React, { useState, useEffect } from "react";
import styles from "./scrollBtn.module.scss";

export function ScrollBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <button className={styles.up_btn} style={isVisible ? { display: "inline" } : { display: "none" }} onClick={scrollToTop}>
      <img src="/top.png" />
      <div>TOP</div>
    </button>
  );
}
