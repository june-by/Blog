import React, { useCallback, useRef, useState } from "react";
import styles from "./styles.module.scss";
import IconButton from "components/shared/IconButton";
import SearchButton from "./searchButton";
import WriteButton from "./writeButton";
import AuthButton from "./AuthButton";
import GoogleIcon from "components/Icon/google";
import GithubIcon from "components/Icon/github";
import useToggle from "Hooks/useToggle";
import useGotoPage from "Hooks/useGotoPage";
import { useGetUserInfo } from "Hooks/User";
import ThemeToggleButton from "./ThemeToggleButton";
import useScroll from "Hooks/useScroll";

const ADMIN_EMAIL = "neostgeart@gmail.com";

const HEADER_HEIGHT = "50px";

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const { data: userData } = useGetUserInfo();
  const [showEmail, _, onClickEmail] = useToggle(false);

  const isLoggedIn = !!userData;

  const gotoPage = useGotoPage();

  const hideHeader = useCallback(() => {
    if (!headerRef?.current) {
      return;
    }
    headerRef.current.style.marginTop = `-${HEADER_HEIGHT}`;
  }, []);

  const showHeader = useCallback(() => {
    if (!headerRef?.current) {
      return;
    }
    headerRef.current.style.marginTop = "0px";
  }, []);

  useScroll({ onScrollDown: hideHeader, onScrollUp: showHeader });

  return (
    <header ref={headerRef} className={styles.headerStyleWrap}>
      <div className={styles.headerContentWrap}>
        <div className={styles.headerLeftWrap}>
          <h1 onClick={gotoPage("/")}>ByJuun.</h1>
          <IconButton
            Icon={<GithubIcon />}
            aria-label="gotoGithubButton"
            onClick={() => window.open("https://github.com/BY-juun")}
          />
          <IconButton
            Icon={<GoogleIcon />}
            aria-label="toggleEmailButton"
            onClick={onClickEmail}
          />
          {showEmail && (
            <div className={styles.headerLeftWrap_email}>{ADMIN_EMAIL}</div>
          )}
        </div>
        <div className={styles.headerRightWrap}>
          {isLoggedIn && (
            <span>
              <strong>{userData.nickname}</strong>님
            </span>
          )}
          <WriteButton />
          <ThemeToggleButton />
          <SearchButton />
          <AuthButton isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
