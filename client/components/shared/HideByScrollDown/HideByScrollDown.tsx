import useScroll from "Hooks/useScroll";
import React, { ReactNode, createElement, useCallback, useRef } from "react";
import styles from "./styles.module.scss";

interface Props extends React.HTMLAttributes<HTMLAllCollection> {
  children: ReactNode;
  hideDirection: "top" | "right" | "left" | "bottom";
  valueForHide: string;
  tagName?: string;
  className?: string;
  position: {
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
  };
}

interface StyleType {
  top: "marginTop";
  right: "marginRight";
  left: "marginLeft";
  bottom: "marginBottom";
}

const STYLE: StyleType = {
  top: "marginTop",
  right: "marginRight",
  left: "marginLeft",
  bottom: "marginBottom",
};

const HideByScrollDown = ({
  hideDirection,
  children,
  valueForHide,
  tagName = "div",
  className,
  position,
  ...props
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const styleForAnimation = STYLE[hideDirection];
  console.log("position : ", position);
  const hide = useCallback(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style[styleForAnimation] = valueForHide;
  }, [styleForAnimation, valueForHide]);

  const show = useCallback(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style[styleForAnimation] = "0";
  }, [styleForAnimation]);

  useScroll({ onScrollDown: hide, onScrollUp: show });

  return (
    <>
      {createElement(
        tagName,
        {
          className: `${styles.HideByScrollDown} ${className}`,
          ref: wrapperRef,
          style: { ...position },
          ...props,
        },
        <>{children}</>
      )}
    </>
  );
};

export default HideByScrollDown;
