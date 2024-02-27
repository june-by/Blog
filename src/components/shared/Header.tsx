import React from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import RenderAfterMounted from "./RenderAfterMounted";

const ROUTES = [
  { title: "HOME", href: "/" },
  { title: "SNIPPETS", href: "/snippets" },
];

const header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <RenderAfterMounted fallback={<div />}>
          <ModeToggle />
        </RenderAfterMounted>
        <div className="flex gap-4">
          {ROUTES.map((route) => (
            <nav key={route.title} className="ml-auto text-sm font-medium space-x-6">
              <Link href={route.href}>{route.title}</Link>
            </nav>
          ))}
        </div>
      </div>
    </header>
  );
};

export default header;
