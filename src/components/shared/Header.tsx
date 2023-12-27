import React from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import RenderAfterMounted from "./RenderAfterMounted";

const header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <RenderAfterMounted>
          <ModeToggle />
        </RenderAfterMounted>
        <nav className="ml-auto text-sm font-medium space-x-6">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
};

export default header;
