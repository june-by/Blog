import React, { useCallback, useState } from "react";
import LoginModal from "../../Block/LoginModal";
import SignUpModal from "../../Block/SignUpModal";
import styles from "./styles.module.scss";

const Header = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);

  const onClickLogin = useCallback(() => {
    setOpenLogin(true);
  }, []);

  const onClickSignUp = useCallback(() => {
    setOpenSignUp(true);
  }, []);

  return (
    <>
      <div className={styles.HeaderRoot}>
        <div className={styles.HeaderRoot_title}>ByJuun.com</div>
        <div className={styles.HeaderRoot_left}>
          <span>검색</span>
          <span onClick={onClickLogin}>로그인</span>
          <span onClick={onClickSignUp}>회원가입</span>
        </div>
      </div>
      {openLogin && <LoginModal open={openLogin} setOpen={setOpenLogin} />}
      {openSignUp && <SignUpModal open={openSignUp} setOpen={setOpenSignUp} />}
    </>
  );
};

export default Header;
