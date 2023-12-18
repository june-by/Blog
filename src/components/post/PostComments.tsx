"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const src = "https://giscus.app";

const Comments = () => {
  const commentWrapperRef = useRef<HTMLScriptElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!commentWrapperRef.current) {
      return;
    }

    if (commentWrapperRef.current?.firstChild) {
      return;
    }

    const scriptElem = document.createElement("script");
    scriptElem.src = `${src}/client.js`;

    Object.entries(SCRIPT_ATTRIBUTES).forEach(([key, value]) => {
      scriptElem.setAttribute(key, value);
    });
    scriptElem.setAttribute("data-theme", theme ?? "");
    scriptElem.async = true;
    commentWrapperRef.current?.appendChild(scriptElem);

    return () => {
      if (!commentWrapperRef.current) {
        return;
      }

      if (commentWrapperRef.current?.innerHTML) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        commentWrapperRef.current.innerHTML = "";
      }
    };
  }, [theme]);

  return <section className="mt-12" ref={commentWrapperRef} />;
};

const SCRIPT_ATTRIBUTES = {
  "data-repo": "BY-juun/Blog",
  "data-repo-id": "MDEwOlJlcG9zaXRvcnkzODc4MTYxNjA=",
  "data-category": "Comments",
  "data-category-id": "DIC_kwDOFx2a4M4CYB9c",
  "data-mapping": "pathname",
  "data-reactions-enabled": "1",
  "data-emit-metadata": "0",
  "data-input-position": "bottom",
  "data-lang": "ko",
  "data-loading": "lazy",
  crossorigin: "anonymous",
};

export default Comments;
