import useVerticalScrollHandler from "Hooks/useVerticalScrollHandler";
import React, {
  ReactNode,
  createElement,
  useCallback,
  useRef,
  type HTMLAttributes,
} from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

interface Props extends HTMLAttributes<HTMLAllCollection> {
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

  const hide = useCallback(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style[styleForAnimation] = valueForHide;
  }, [styleForAnimation, valueForHide]);

  const show = useCallback(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style[styleForAnimation] = "0";
  }, [styleForAnimation]);

  useVerticalScrollHandler({ onScrollDown: hide, onScrollUp: show });

  return createElement(
    tagName,
    {
      className: classnames(styles.HideByScrollDown, className),
      ref: wrapperRef,
      style: { ...position },
      ...props,
    },
    children
  );
};

export default HideByScrollDown;
