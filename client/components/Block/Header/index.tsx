import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import HeaderRight from "./HeaderRight";
import useHideHeader from "./useHideHeader";
import useHeaderAnimation from "./useHeaderAnimation";
import DarkModeBtn from "components/Atom/DarkModeBtn";
import MobileMenuContainer from "components/Block/mobileMenu";
import GoogleIcon from "components/Icon/google";
import GithubIcon from "components/Icon/github";
import useToggle from "Hooks/useToggle";
import useGotoPage from "Hooks/useGotoPage";
import useWidthAnimation from "Hooks/useWidthAnimation";

const ADMIN_EMAIL = "neostgeart@gmail.com";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState<boolean>(false);
  const emailRef = useRef<HTMLDivElement>(null);
  const [showEmail, _, onClickEmail] = useToggle(false);

  const gotoPage = useGotoPage();

  const onClickGitHub = () => {
    window.open("https://github.com/BY-juun");
  };

  useWidthAnimation(emailRef, showEmail);

  useHideHeader(setHide);

  useHeaderAnimation({ headerRef, hide, setHide });
  return (
    <>
      <header ref={headerRef} className={styles.HeaderRoot}>
        <div className={styles.HeaderLeft}>
          <h1 onClick={gotoPage("/")}>ByJuun.</h1>
          <button aria-label="gotoGithubButton" onClick={onClickGitHub}>
            <GithubIcon />
          </button>
          <button aria-label="toggleEmailButton" onClick={onClickEmail}>
            <GoogleIcon />
          </button>
          <div ref={emailRef} className={styles.HeaderLeft_email}>
            {ADMIN_EMAIL}
          </div>
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
