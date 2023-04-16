import React, { useRef } from "react";
import useDarkMode from "./useDarkMode";
import useToggle from "Hooks/useToggle";
import styles from "./styles.module.scss";
import extractFromCookie from "utils/extractFromCookie";
import SSRSafeSuspense from "components/_hoc/SSRSafeSuspense";
import Light from "components/Icon/light";
import Dark from "components/Icon/dark";
import IconBtn from "../IconBtn";

const DARK_MODE = false;
const LIGHT_MODE = true;

const DarkModeBtn = () => {
  const [mode, , onChange] = useToggle(extractFromCookie(document.cookie, "theme") === "dark" ? DARK_MODE : LIGHT_MODE);
  useDarkMode(mode);

  return (
    <IconBtn
      data-testid="toggleBtn"
      aria-label="toggleDarkModeButton"
      className={styles.darkmodeBtn}
      onClick={onChange}
      Icon={mode === DARK_MODE ? <Light /> : <Dark />}
    ></IconBtn>
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
