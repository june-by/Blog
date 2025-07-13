import React from "react";
import { ModeToggle } from "../ModeToggle";
import RenderAfterMounted from "./RenderAfterMounted";

const header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <RenderAfterMounted fallback={<div />}>
          <ModeToggle />
        </RenderAfterMounted>
      </div>
    </header>
  );
};

export default header;
