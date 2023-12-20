import React, { HTMLAttributes, PropsWithChildren } from "react";
import CollapseTrigger from "./CollapseTrigger";
import CollapseContent from "./CollapseContent";
import { CollapseContextProvider } from "./CollapseContext";

const Collapse = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <CollapseContextProvider>
      <div {...props}>{children}</div>
    </CollapseContextProvider>
  );
};

Collapse.Trigger = CollapseTrigger;
Collapse.Content = CollapseContent;

export default Collapse;
