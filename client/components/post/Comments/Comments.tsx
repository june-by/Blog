import { useThemeContext } from "context/themeContext";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const src = "https://giscus.app";

const Comments = () => {
  const commentWrapperRef = useRef<HTMLScriptElement | null>(null);
  const { theme, isThemeLoaded } = useThemeContext();
  const themeMode = theme === "dark" ? DARK_THEME : LIGHT_THEME;

  useEffect(() => {
    if (!commentWrapperRef.current) return;
    if (!isThemeLoaded) return;

    if (commentWrapperRef.current?.firstChild) return;
    const scriptElem = document.createElement("script");
    scriptElem.src = `${src}/client.js`;
    scriptElem.setAttribute("data-repo", "BY-juun/Blog");
    scriptElem.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkzODc4MTYxNjA=");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", theme);
    scriptElem.setAttribute("data-lang", "ko");
    scriptElem.setAttribute("data-loading", "lazy");
    scriptElem.setAttribute("crossorigin", "anonymous");
    scriptElem.async = true;

    commentWrapperRef.current?.appendChild(scriptElem);

    return () => {
      if (!commentWrapperRef.current) return;

      if (commentWrapperRef.current?.innerHTML) {
        commentWrapperRef.current.innerHTML = "";
      }
    };
  }, [themeMode, isThemeLoaded]);

  return <section className={styles.Utterances} ref={commentWrapperRef} />;
};

export default Comments;
