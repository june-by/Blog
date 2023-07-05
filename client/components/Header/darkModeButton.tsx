import React from "react";
import Light from "components/Icon/light";
import Dark from "components/Icon/dark";
import IconButton from "../shared/IconButton";
import { useThemeContext } from "context/themeContext";
import styles from "./styles.module.scss";

const DarkModeBtn = () => {
  const { theme, onChangeTheme } = useThemeContext();
  return (
    <IconButton
      data-testid="toggleBtn"
      aria-label="toggleDarkModeButton"
      onClick={onChangeTheme}
      className={styles.iconButton}
      Icon={theme === "dark" ? <Light /> : <Dark />}
    />
  );
};

export default DarkModeBtn;
