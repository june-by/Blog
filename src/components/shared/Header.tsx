import React from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import RenderAfterMounted from "./RenderAfterMounted";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";

const header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <RenderAfterMounted fallback={<div />}>
          <ModeToggle />
        </RenderAfterMounted>
        <div className="flex gap-2 items-center">
          <Link href="/" className="ml-auto text-lg font-medium space-x-6" >
            <FaHome />
          </Link>
          <Link href="https://github.com/june-by" className="ml-auto text-lg font-medium space-x-6" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/byongjun-ahn-20168b252/" className="ml-auto text-lg font-medium space-x-6" target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default header;
