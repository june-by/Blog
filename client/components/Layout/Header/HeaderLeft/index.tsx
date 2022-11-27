import React, { useCallback, useRef } from "react";
import useGotoPage from "Hooks/useGotoPage";
import useToggle from "Hooks/useToggle";
import useWidthAnimation from "Hooks/useWidthAnimation";
import styles from "./styles.module.scss";

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
      <div>
        <img
          className={styles.icon}
          onClick={onClickGitHub}
          src="/github.png"
          alt="깃헙"
        />
      </div>
      <div onClick={onClickEmail}>
        <img className={styles.icon} src="/email.png" alt="mail" />
      </div>
      <div ref={emailRef} className={styles.HeaderLeft_email}>
        neostgeart@gmail.com
      </div>
    </div>
  );
};

export default React.memo(HeaderLeft);
