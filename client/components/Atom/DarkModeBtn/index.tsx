import React, { useRef } from "react";
import useDarkMode from "./useDarkMode";
import useToggle from "Hooks/useToggle";
import styles from "./styles.module.scss";

const DARK_MODE = false;
const LIGHT_MODE = true;

const DarkModeBtn = () => {
  const toggleThumbRef = useRef<HTMLButtonElement>(null);

  const [mode, , onChange] = useToggle(document.body.dataset.theme === "dark" ? DARK_MODE : LIGHT_MODE);
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
          style={{ left: mode === DARK_MODE ? "27px" : "1px" }}
          className={styles.toggleTrackThumb}
        ></button>
      </div>
    </div>
  );
};

export default DarkModeBtn;
