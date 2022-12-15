import React, { useCallback, useContext, useRef, useState } from "react";
import useWidthAnimation from "Hooks/useWidthAnimation";
import styles from "./styles.module.scss";
import MobileMenu from "components/Layout/MobileMenu";
import HeaderRight from "./HeaderRight";
import useHideHeader from "./useHideHeader";
import useHeaderAnimation from "./useHeaderAnimation";
import HeaderLeft from "./HeaderLeft";
import useToggle from "Hooks/useToggle";
import DarkModeBtn from "components/Atom/DarkModeBtn";
import { ThemeContext } from "utils/ThemeContext";
import MenuIcon from "components/Icon/menu";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const headerRef = useRef<HTMLDivElement>(null);
  const [showMobileMenu, , clickShowMobileMenu] = useToggle(false);
  const [hide, setHide] = useState<boolean>(false);

  useHideHeader(setHide);

  useHeaderAnimation({ headerRef, hide, setHide });
  return (
    <>
      <header ref={headerRef} className={`${styles.HeaderRoot} ${styles[theme]}`}>
        <div>
          <HeaderLeft />
        </div>
        <div className={styles.HeaderRightWrapper}>
          <DarkModeBtn />
          <HeaderRight />
        </div>
        <div className={styles.HeaderRoot_mobileBtn}>
          <DarkModeBtn />
          <button className={styles.HeaderRoot_mobileBtn_btn} onClick={clickShowMobileMenu}>
            <MenuIcon fill={theme === "light" ? "black" : "#F8F8F8"} />
          </button>
          <MobileMenu open={showMobileMenu} onClose={clickShowMobileMenu} />
        </div>
      </header>
    </>
  );
};

export default Header;
