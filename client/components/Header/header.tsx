import React from "react";
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

const ADMIN_EMAIL = "neostgeart@gmail.com";

const Header = () => {
  const { data: userData } = useGetUserInfo();
  const [showEmail, _, onClickEmail] = useToggle(false);

  const isLoggedIn = !!userData;

  const gotoPage = useGotoPage();

  return (
    <header className={styles.headerStyleWrap}>
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
          <ThemeToggleButton />
          <SearchButton />
          <AuthButton isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
