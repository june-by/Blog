import React from "react";
import Light from "components/Icon/light";
import Dark from "components/Icon/dark";
import { useThemeContext } from "@contexts/themeContext";
import styles from "./styles.module.scss";
import SwitchCase from "components/shared/SwitchCase";

const ThemeToggleButton = () => {
  const { theme, handleChangeTheme } = useThemeContext();

  return (
    <button
      data-testid="toggleBtn"
      aria-label="toggleDarkModeButton"
      onClick={handleChangeTheme}
      className={styles.iconButton}
    >
      <SwitchCase
        value={theme}
        caseBy={{
          dark: <Light className={styles.themeSVG} />,
          light: <Dark className={styles.themeSVG} />,
        }}
      />
    </button>
  );
};

export default ThemeToggleButton;
