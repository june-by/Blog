import React, { PropsWithChildren } from "react";
import { useCollapseStateContext } from "./CollapseContext";

const CollapseContent = ({ children }: { children: JSX.Element }) => {
  const { isCollapseOpen } = useCollapseStateContext();

  if (!isCollapseOpen) return null;
  else return children;
};

export default CollapseContent;
