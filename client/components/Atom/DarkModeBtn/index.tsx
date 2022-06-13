import React, { useContext, useRef } from "react";
import useDarkMode from "../../../Hooks/useDarkMode";
import useToggle from "../../../Hooks/useToggle";
import { ThemeContext } from "../../../utils/ThemeContext";
import styles from "./styles.module.scss";

const DarkModeBtn = () => {
	const toggleThumbRef = useRef<HTMLButtonElement>(null);
	const { theme } = useContext(ThemeContext);
	const [mode, , onChange] = useToggle(theme === 'dark' ? false : true);
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
				<button ref={toggleThumbRef} style={{ left: mode === false ? "27px" : "1px" }} className={styles.toggleTrackThumb}></button>
			</div>
			{/* <input type="checkBox" /> */}
		</div>
	);
};

export default DarkModeBtn;
