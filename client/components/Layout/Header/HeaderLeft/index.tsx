import React, { useCallback, useRef } from "react";
import useGotoPage from "Hooks/useGotoPage";
import useToggle from "Hooks/useToggle";
import useWidthAnimation from "Hooks/useWidthAnimation";
import styles from "./styles.module.scss";
import GoogleIcon from "components/Icon/google";
import GithubIcon from "components/Icon/github";

const HeaderLeft = () => {
  const emailRef = useRef<HTMLDivElement>(null);
  const [showEmail, _, onClickEmail] = useToggle(false);

  const gotoPage = useGotoPage();

  const onClickGitHub = useCallback(() => {
    window.open("https://github.com/BY-juun");
  }, []);

  useWidthAnimation(emailRef, showEmail);

  return (
    <div className={styles.HeaderLeft}>
      <span onClick={gotoPage("/")}>ByJuun.com</span>
      <button aria-label="gotoGithubButton" onClick={onClickGitHub}>
        <GithubIcon />
      </button>
      <button aria-label="toggleEmailButton" onClick={onClickEmail}>
        <GoogleIcon />
      </button>
      <div ref={emailRef} className={styles.HeaderLeft_email}>
        neostgeart@gmail.com
      </div>
    </div>
  );
};

export default React.memo(HeaderLeft);
