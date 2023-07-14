import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Header from "./header";

const FloatingHeader = () => {
  const [visible, setVisible] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const prevScrollTop = useRef(0);
  const direction = useRef<"UP" | "DOWN">("DOWN");
  const transitionPoint = useRef(0);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    const nextDirection = prevScrollTop.current > scrollTop ? "UP" : "DOWN";

    if (direction.current === "DOWN" && nextDirection === "UP" && transitionPoint.current - scrollTop < 0) {
      setVisible(true);
      transitionPoint.current = scrollTop;
    }

    if (direction.current === "UP" && nextDirection === "DOWN" && scrollTop - transitionPoint.current < -1 * height) {
      transitionPoint.current = scrollTop + height;
    }

    if (scrollTop < 1) {
      setVisible(false);
    }

    setMarginTop(Math.min(0, -1 * height + transitionPoint.current - scrollTop));

    direction.current = nextDirection;
    prevScrollTop.current = scrollTop;
  }, [height]);

  useEffect(() => {
    if (!blockRef.current) return;
    setHeight(blockRef.current.clientHeight);
    setMarginTop(-1 * blockRef.current.clientHeight);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div
      ref={blockRef}
      className={styles.floatingHeader}
      style={
        visible
          ? {
              marginTop: marginTop,
              display: "block",
            }
          : {
              marginTop: -1 * height,
              opacity: 0,
            }
      }
    >
      <Header />
    </div>
  );
};

export default FloatingHeader;

const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};
