import { useEffect } from "react";

const LIGHT = false;
const DARK_MODE_POS = "27px";
const LIGHT_MODE_POS = "1px";

function useDarkMode(mode: boolean, ref: React.RefObject<HTMLButtonElement>) {
  useEffect(() => {
    changeMode(mode, ref);
  }, [mode, ref]);
}

function changeMode(mode: boolean, ref: React.RefObject<HTMLButtonElement>) {
  if (!ref.current) return;
  const { theme, left } = MODE_VALUE[changeModeBoolToStr(mode)];
  // ref.current.style.left = left;
  document.body.dataset.theme = theme;
  document.cookie = `theme=${theme}; path=/`;
}

interface MODE_VALUE_TYPE {
  [key: string]: { theme: string; left: string };
}

const MODE_VALUE: MODE_VALUE_TYPE = {
  LIGHT: { theme: "light", left: LIGHT_MODE_POS },
  DARK: { theme: "dark", left: DARK_MODE_POS },
};

function changeModeBoolToStr(mode: boolean) {
  return mode === LIGHT ? "DARK" : "LIGHT";
}

export default useDarkMode;
