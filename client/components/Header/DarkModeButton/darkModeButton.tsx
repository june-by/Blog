import React, { useEffect } from "react";
import useDarkMode from "./useDarkMode";
import useToggle from "Hooks/useToggle";
import styles from "./darkModeButton.module.scss";
import extractFromCookie from "utils/extractFromCookie";
import SSRSafeSuspense from "components/_hoc/SSRSafeSuspense";
import Light from "components/Icon/light";
import Dark from "components/Icon/dark";
import IconButton from "../../shared/IconButton";

const DARK_MODE = false;
const LIGHT_MODE = true;

const DarkModeBtn = () => {
  const [mode, , onChange] = useToggle(extractFromCookie(document.cookie, "theme") === "dark" ? DARK_MODE : LIGHT_MODE);
  useDarkMode(mode);

  return (
    <IconButton
      data-testid="toggleBtn"
      aria-label="toggleDarkModeButton"
      className={styles.darkmodeBtn}
      onClick={onChange}
      Icon={mode === DARK_MODE ? <Light /> : <Dark />}
    ></IconButton>
  );
};

const DarkModeBtnSuspenseWrapper = () => {
  return (
    <SSRSafeSuspense>
      <DarkModeBtn />
    </SSRSafeSuspense>
  );
};

export default DarkModeBtnSuspenseWrapper;
