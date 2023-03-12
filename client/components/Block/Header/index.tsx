import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import HeaderRight from "./HeaderRight";
import useHideHeader from "./useHideHeader";
import useHeaderAnimation from "./useHeaderAnimation";
import HeaderLeft from "./HeaderLeft";
import DarkModeBtn from "components/Atom/DarkModeBtn";
import MobileMenuContainer from "components/Block/mobileMenu";
import SSRSafeSuspense from "components/_hoc/SSRSafeSuspense";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState<boolean>(false);

  useHideHeader(setHide);

  useHeaderAnimation({ headerRef, hide, setHide });
  return (
    <>
      <header ref={headerRef} className={styles.HeaderRoot}>
        <div>
          <HeaderLeft />
        </div>
        <div className={styles.HeaderRightWrapper}>
          <DarkModeBtn />
          <HeaderRight />
        </div>
        <div className={styles.HeaderRoot_mobileBtn}>
          <DarkModeBtn />
          <MobileMenuContainer>
            <>
              <MobileMenuContainer.ToggleButton />
              <MobileMenuContainer.Menu />
            </>
          </MobileMenuContainer>
        </div>
      </header>
    </>
  );
};

export default Header;
