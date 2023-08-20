import React, { ReactNode, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
interface Props {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

const LEFT_STYLE_FOR_OPEN = "100%";
const LEFT_STYLE_FOR_CLOSE = "0";

const LeftSlideLayer = ({ children, isOpen, className }: Props) => {
  const leftSlideLayerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!leftSlideLayerRef.current) return;
    if (!isOpen) leftSlideLayerRef.current.style.left = LEFT_STYLE_FOR_OPEN;
    else leftSlideLayerRef.current.style.left = LEFT_STYLE_FOR_CLOSE;
  }, [isOpen]);

  return (
    <div
      ref={leftSlideLayerRef}
      className={`${styles.LeftSlideLayer} ${className}`}
    >
      {children}
    </div>
  );
};

export default LeftSlideLayer;
