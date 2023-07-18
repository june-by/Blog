import { useThemeContext } from "context/themeContext";
import React, { useEffect, useRef } from "react";
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

    const createUtterancesEl = () => {
      if (utterancWrapperRef.current?.firstChild) return;
      const scriptElem = document.createElement("script");
      scriptElem.src = `${src}/client.js`;
      scriptElem.async = true;
      scriptElem.setAttribute("repo", "BY-juun/Blog");
      scriptElem.setAttribute("issue-term", "title");
      scriptElem.setAttribute("theme", themeMode);
      utterancWrapperRef.current?.appendChild(scriptElem);
    };

    const postThemeMessage = () => {
      const message = {
        type: "set-theme",
        theme: themeMode,
      };
      (utterancesEl as any).contentWindow.postMessage(message, src);
    };

    const utterancesEl =
      utterancWrapperRef.current.querySelector(utterancesSelector);

    utterancesEl ? postThemeMessage() : createUtterancesEl();
  }, [themeMode, isThemeLoaded]);

  useEffect(() => {}, [themeMode]);

  return <section className={styles.Utterances} ref={utterancWrapperRef} />;
};

export default Utterances;
