import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import useHideHeader from "./useHideHeader";
import useHeaderAnimation from "./useHeaderAnimation";
import DarkModeButton from "./darkModeButton";
import GoogleIcon from "components/Icon/google";
import GithubIcon from "components/Icon/github";
import useToggle from "Hooks/useToggle";
import useGotoPage from "Hooks/useGotoPage";
import { useGetUserInfo } from "Hooks/User";
import LoginModal from "components/_Modal/LoginModal";
import SignUpModal from "components/_Modal/SignUpModal";
import SearchModal from "components/_Modal/SearchModal";
import IconButton from "components/shared/IconButton";
import SearchButton from "./searchButton";
import LogoutButton from "./logoutButton";
import LoginButton from "./LoginButton";
import WriteButton from "./writeButton";

const ADMIN_EMAIL = "neostgeart@gmail.com";

const HeaderWrap = () => {
  const { data: userData } = useGetUserInfo();
  const headerRef = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState<boolean>(false);
  const [showEmail, _, onClickEmail] = useToggle(false);

  const isLoggedIn = !!userData;

  const gotoPage = useGotoPage();

  useHideHeader(setHide);

  useHeaderAnimation({ headerRef, hide, setHide });

  return (
    <>
      <header ref={headerRef} className={styles.headerStyleWrap}>
        <div className={styles.headerContentWrap}>
          <div className={styles.headerLeftWrap}>
            <h1 onClick={gotoPage("/")}>ByJuun.</h1>
            <IconButton
              Icon={<GithubIcon />}
              aria-label="gotoGithubButton"
              onClick={() => window.open("https://github.com/BY-juun")}
            />
            <IconButton Icon={<GoogleIcon />} aria-label="toggleEmailButton" onClick={onClickEmail} />
            {showEmail && <div className={styles.headerLeftWrap_email}>{ADMIN_EMAIL}</div>}
          </div>
          <div className={styles.headerRightWrap}>
            {isLoggedIn && (
              <span>
                <strong>{userData.nickname}</strong>님
              </span>
            )}
            <WriteButton />
            <DarkModeButton />
            <SearchButton />
            {isLoggedIn ? (
              <>
                <LogoutButton />
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </header>
      <LoginModal />
      <SignUpModal />
      <SearchModal />
    </>
  );
};

export default HeaderWrap;
