import React, { useCallback, useRef, useState } from "react";
import useGotoPage from "../../../Hooks/useGotoPage";
import useWidthAnimation from "../../../Hooks/useWidthAnimation";
import styles from "./styles.module.scss";
import MobileMenu from "../../Atom/MobileMenu";
import HeaderRight from "../../Atom/HeaderRight";

const Header = () => {
  const emailRef = useRef<HTMLDivElement>(null);
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const gotoPage = useGotoPage();

  const onClickGitHub = useCallback(() => {
    window.open("https://github.com/BY-juun");
  }, []);

  const onClickEmail = useCallback(() => {
    setShowEmail((prev) => !prev);
  }, []);

  const clickShowMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);

  useWidthAnimation(emailRef, showEmail);

  return (
    <>
      <div className={styles.HeaderRoot}>
        <div className={styles.HeaderRoot_title}>
          <span onClick={gotoPage("/")}>ByJuun.com</span>
          <div>
            <img onClick={onClickGitHub} src="/github.png" alt="깃헙" />
          </div>
          <div onClick={onClickEmail}>
            <img src="/email.png" alt="mail" />
          </div>
          <div ref={emailRef} className={styles.HeaderRoot_title_email}>
            neostgeart@gmail.com
          </div>
        </div>
        <div className={styles.HeaderRightWrapper}>
          <HeaderRight />
        </div>
        <div className={styles.HeaderRoot_mobileBtn}>
          <button onClick={clickShowMobileMenu}>
            <img src="/menu.png" alt="더보기" />
          </button>
          <MobileMenu open={showMobileMenu} />
        </div>
      </div>
    </>
  );
};

export default Header;
