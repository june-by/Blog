import { useEffect } from "react";

const LIGHT = false;

function useDarkMode(mode: boolean) {
  useEffect(() => {
    changeMode(mode);
  }, [mode]);
}

function changeMode(mode: boolean) {
  const theme = mode === LIGHT ? "light" : "dark";
  document.body.dataset.theme = theme;
  document.cookie = `theme=${theme}; path=/`;
}

export default useDarkMode;
