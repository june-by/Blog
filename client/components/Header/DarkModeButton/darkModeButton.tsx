import React from "react";
import styles from "./darkModeButton.module.scss";
import Light from "components/Icon/light";
import Dark from "components/Icon/dark";
import IconButton from "../../shared/IconButton";
import { useThemeContext } from "context/themeContext";

const DarkModeBtn = () => {
  const { theme, onChangeTheme } = useThemeContext();
  return (
    <IconButton
      data-testid="toggleBtn"
      aria-label="toggleDarkModeButton"
      className={styles.darkmodeBtn}
      onClick={onChangeTheme}
      Icon={theme === "dark" ? <Light /> : <Dark />}
    ></IconButton>
  );
};

export default DarkModeBtn;
