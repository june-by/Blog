import React, { ReactNode, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
interface Props {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

const LeftSlideLayer = ({ children, isOpen, className }: Props) => {
  const leftSlideLayerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!leftSlideLayerRef.current) return;
    if (!isOpen) leftSlideLayerRef.current.style.left = "100%";
    else leftSlideLayerRef.current.style.left = "0";
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
