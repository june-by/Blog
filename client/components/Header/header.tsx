import React, { useCallback, useRef } from "react";
import styles from "./styles.module.scss";
import SearchButton from "./searchButton";
import WriteButton from "./writeButton";
import AuthButton from "./AuthButton";
import useGotoPage from "Hooks/useGotoPage";
import { useGetUserQuery } from "Hooks/User";
import ThemeToggleButton from "./ThemeToggleButton";
import useScroll from "Hooks/useScroll";

const ADMIN_EMAIL = "neostgeart@gmail.com";

const HEADER_HEIGHT = "65px";

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const { data: userData } = useGetUserQuery();

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
        {/* <div className={styles.headerLeftWrap}> */}
        <h1 onClick={gotoPage("/")}>ByJuun.</h1>
        {/* </div> */}
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
