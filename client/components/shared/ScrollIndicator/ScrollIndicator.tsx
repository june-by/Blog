"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const DEFAULT_HEIGHT = 1000000;

const ScrollIndicator = () => {
  const [pageHeight, setPageHeight] = useState(DEFAULT_HEIGHT);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setPageHeight(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      );
    };

    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    onResize();
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={styles.ScrollIndicatorWrap}>
      <div
        className={styles.ScrollIndicator}
        style={{ width: `${(scrollY / pageHeight) * 100}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;
