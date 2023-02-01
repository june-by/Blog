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
  const { cookie, theme, left } = MODE_VALUE[changeModeBoolToStr(mode)];
  ref.current.style.left = left;
  document.body.dataset.theme = theme;
  document.cookie = cookie;
}

interface MODE_VALUE_TYPE {
  [key: string]: { cookie: string; theme: string; left: string };
}

const MODE_VALUE: MODE_VALUE_TYPE = {
  LIGHT: { cookie: "theme=light;", theme: "light", left: LIGHT_MODE_POS },
  DARK: { cookie: "theme=dark;", theme: "dark", left: DARK_MODE_POS },
};

function changeModeBoolToStr(mode: boolean) {
  return mode === LIGHT ? "DARK" : "LIGHT";
}

export default useDarkMode;
