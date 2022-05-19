import React, { useCallback, useState } from "react";
import useGotoPage from "../../../Hooks/useGotoPage";
import LoginModal from "../../Block/LoginModal";
import SearchModal from "../../Block/SearchModal";
import SignUpModal from "../../Block/SignUpModal";
import useOpenModal from "./Hooks/useOpenModal";
import styles from "./styles.module.scss";

const Header = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const gotoPage = useGotoPage();
  const [onClickLogin, onClickSignUp, onClickSearch] = useOpenModal(setOpenLogin, setOpenSignUp, setOpenSearch);

  return (
    <>
      <div className={styles.HeaderRoot}>
        <div className={styles.HeaderRoot_title} onClick={gotoPage("/")}>
          ByJuun.com
        </div>
        <div className={styles.HeaderRoot_left}>
          <span onClick={onClickSearch}>검색</span>
          <span onClick={onClickLogin}>로그인</span>
          <span onClick={onClickSignUp}>회원가입</span>
        </div>
      </div>
      {openLogin && <LoginModal open={openLogin} setOpen={setOpenLogin} />}
      {openSignUp && <SignUpModal open={openSignUp} setOpen={setOpenSignUp} />}
      {openSearch && <SearchModal open={openSearch} setOpen={setOpenSearch} />}
    </>
  );
};

export default Header;
