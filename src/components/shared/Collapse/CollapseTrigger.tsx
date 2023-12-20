import React from "react";
import {
  useCollapseActionContext,
  useCollapseStateContext,
} from "./CollapseContext";

interface Props {
  children: (isCollapseOpen: boolean) => JSX.Element;
}

const CollapseTrigger = ({ children }: Props) => {
  const { toggleCollapse } = useCollapseActionContext();
  const { isCollapseOpen } = useCollapseStateContext();

  const element = children(isCollapseOpen);

  return React.cloneElement(element, {
    ...element.props,
    onClick: () => {
      element.props.onClick?.();
      toggleCollapse();
    },
  });
};

export default CollapseTrigger;
