import React, { useEffect, useRef, useState } from "react";
import useDarkMode from "../../../Hooks/useDarkMode";
import useToggle from "../../../Hooks/useToggle";
import styles from "./styles.module.scss";

const DarkModeBtn = () => {
  const toggleThumbRef = useRef<HTMLButtonElement>(null);
  const [mode, , onChange] = useToggle(false);
  useDarkMode(mode, toggleThumbRef);
  return (
    <div className={styles.DarkModeBtnWrapper} onClick={onChange}>
      <div className={styles.DarkModeBtn}>
        <div className={styles.toggleTrackCheckY}>
          <span>🌜</span>
        </div>
        <div className={styles.toggleTrackCheckX}>
          <span>🌞</span>
        </div>
        <button ref={toggleThumbRef} className={styles.toggleTrackThumb}></button>
      </div>
      {/* <input type="checkBox" /> */}
    </div>
  );
};

export default DarkModeBtn;
