import { useEffect } from "react";

const LIGHT = false;
const DARK_MODE_POS = "27px";
const LIGHT_MODE_POST = "1px";

function useDarkMode(mode: boolean, ref: React.RefObject<HTMLButtonElement>) {
  useEffect(() => {
    if (!ref.current) return;
    if (mode === LIGHT) {
      ref.current.style.left = DARK_MODE_POS;
      document.body.dataset.theme = "dark";
      document.cookie = `theme=dark;`;
    } else {
      ref.current.style.left = LIGHT_MODE_POST;
      document.body.dataset.theme = "light";
      document.cookie = `theme=light;`;
    }
  }, [mode, ref]);
}

export default useDarkMode;
