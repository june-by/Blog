import { useContext, useEffect } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const useDarkMode = (mode: boolean, ref: React.RefObject<HTMLButtonElement>) => {
  const { setTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (!ref.current) return;
    if (mode === false) {
      ref.current.style.left = "27px";
      setTheme("dark");
      document.body.style.background = "#121212";
      document.body.style.color = "white";
    } else {
      ref.current.style.left = "1px";
      setTheme("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  }, [mode]);
};

export default useDarkMode;
