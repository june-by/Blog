import { useEffect } from "react";

const LIGHT = false;

function useDarkMode(mode: boolean) {
  useEffect(() => {
    changeMode(mode);
  }, [mode]);
}

function changeMode(mode: boolean) {
  const { theme } = MODE_VALUE[changeModeBoolToStr(mode)];
  document.body.dataset.theme = theme;
  document.cookie = `theme=${theme}; path=/`;
}

interface MODE_VALUE_TYPE {
  [key: string]: { theme: string };
}

const MODE_VALUE: MODE_VALUE_TYPE = {
  LIGHT: { theme: "light" },
  DARK: { theme: "dark" },
};

function changeModeBoolToStr(mode: boolean) {
  return mode === LIGHT ? "DARK" : "LIGHT";
}

export default useDarkMode;
