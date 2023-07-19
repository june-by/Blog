import { useThemeContext } from "context/themeContext";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const utterancesSelector = "iframe.utterances-frame";
const LIGHT_THEME = "github-light";
const DARK_THEME = "github-dark";
const src = "https://utteranc.es";

const Utterances = () => {
  const utterancWrapperRef = useRef<HTMLScriptElement | null>(null);
  const { theme, isThemeLoaded } = useThemeContext();
  const themeMode = theme === "dark" ? DARK_THEME : LIGHT_THEME;

  useEffect(() => {
    if (!utterancWrapperRef.current) return;
    if (!isThemeLoaded) return;

    if (utterancWrapperRef.current?.firstChild) return;
    const scriptElem = document.createElement("script");
    scriptElem.src = `${src}/client.js`;
    scriptElem.async = true;
    scriptElem.setAttribute("repo", "BY-juun/Blog");
    scriptElem.setAttribute("issue-term", "title");
    scriptElem.setAttribute("theme", themeMode);
    utterancWrapperRef.current?.appendChild(scriptElem);

    return () => {
      if (!utterancWrapperRef.current) return;

      if (utterancWrapperRef.current?.innerHTML) {
        utterancWrapperRef.current.innerHTML = "";
      }
    };
  }, [themeMode, isThemeLoaded]);

  return <section className={styles.Utterances} ref={utterancWrapperRef} />;
};

export default Utterances;
