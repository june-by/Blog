import React, { ReactNode } from "react";
import Light from "components/Icon/light";
import Dark from "components/Icon/dark";
import IconButton from "../shared/IconButton";
import { useThemeContext } from "context/themeContext";
import styles from "./styles.module.scss";
import { animated, useTransition } from "react-spring";

const ThemeToggleButton = () => {
  const { theme, handleChangeTheme } = useThemeContext();

  const isDark = theme === "dark";

  const transitions = useTransition(isDark, {
    initial: {
      transform: "scale(1) rotate(0deg)",
      opacity: 1,
    },
    from: {
      transform: "scale(0) rotate(-180deg)",
      opacity: 0,
    },
    enter: {
      transform: "scale(1) rotate(0deg)",
      opacity: 1,
    },

    reverse: true,
  });

  return (
    <button
      data-testid="toggleBtn"
      aria-label="toggleDarkModeButton"
      onClick={handleChangeTheme}
      className={styles.iconButton}
    >
      {transitions((style, item) => (
        <animated.div style={style}>{item ? <Light /> : <Dark />}</animated.div>
      ))}
    </button>
  );
};

export default ThemeToggleButton;
