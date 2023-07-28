import TopIcon from "components/Icon/top";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const ScrollButton = () => {
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
    <button
      className={styles.up_btn}
      style={isVisible ? { display: "inline" } : { display: "none" }}
      onClick={scrollToTop}
    >
      <TopIcon />
      <div>TOP</div>
    </button>
  );
};

export default React.memo(ScrollButton);
