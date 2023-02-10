import React, { useRef } from "react";
import useDarkMode from "./useDarkMode";
import useToggle from "Hooks/useToggle";
import styles from "./styles.module.scss";
import extractFromCookie from "utils/extractFromCookie";

const DARK_MODE = false;
const LIGHT_MODE = true;
const DARK_MODE_POS = "27px";
const LIGHT_MODE_POS = "1px";

const DarkModeBtn = () => {
  const toggleThumbRef = useRef<HTMLButtonElement>(null);
  const [mode, , onChange] = useToggle(extractFromCookie(document.cookie, "theme") === "dark" ? DARK_MODE : LIGHT_MODE);
  useDarkMode(mode, toggleThumbRef);

  return (
    <div data-testid="DarkModeBtnWrapper" className={styles.DarkModeBtnWrapper} onClick={onChange}>
      <div className={styles.DarkModeBtn}>
        <div className={styles.toggleTrackCheckY}>
          <span>🌜</span>
        </div>
        <div className={styles.toggleTrackCheckX}>
          <span>🌞</span>
        </div>
        <button
          data-testid="toggleBtn"
          aria-label="toggleDarkModeButton"
          ref={toggleThumbRef}
          style={{ left: mode === DARK_MODE ? DARK_MODE_POS : LIGHT_MODE_POS }}
          className={styles.toggleTrackThumb}
        ></button>
      </div>
    </div>
  );
};

export default DarkModeBtn;
