import React, { useCallback, useRef, useState } from "react";
import useWidthAnimation from "../../../Hooks/useWidthAnimation";
import styles from "./styles.module.scss";
import MobileMenu from "../MobileMenu";
import HeaderRight from "./HeaderRight";
import useHideHeader from "../../../Hooks/useHideHeader";
import useHeaderAnimation from "../../../Hooks/useHeaderAnimation";
import HeaderLeft from "./HeaderLeft";
import useToggle from "../../../Hooks/useToggle";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [showMobileMenu, setShowMobileMenu, clickShowMobileMenu] = useToggle(false);
  const [hide, setHide] = useState<boolean>(false);

  useHideHeader(setHide);

  useHeaderAnimation(headerRef, hide, setHide);

  return (
    <>
      <div ref={headerRef} className={styles.HeaderRoot}>
        <div>
          <HeaderLeft />
        </div>
        <div className={styles.HeaderRightWrapper}>
          <HeaderRight />
        </div>
        <div className={styles.HeaderRoot_mobileBtn}>
          <button className={styles.HeaderRoot_mobileBtn_btn} onClick={clickShowMobileMenu}>
            <img src="/menu.png" alt="더보기" />
          </button>
          <MobileMenu open={showMobileMenu} setOpen={setShowMobileMenu} />
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);
