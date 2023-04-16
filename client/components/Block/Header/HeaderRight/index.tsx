import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import useOpenModal from "Hooks/useOpenModal";
import { useGetUserInfo, useLogOut } from "Hooks/User";
import LoginModal from "components/Block/_Modal/LoginModal";
import SearchModal from "components/Block/_Modal/SearchModal";
import SignUpModal from "components/Block/_Modal/SignUpModal";
import styles from "./styles.module.scss";
import IsAdmin from "utils/isAdmin";
import SearchIcon from "components/Icon/search";
import AccountIcon from "components/Icon/account";

const HeaderRight = () => {
  const { data: UserInfo } = useGetUserInfo();
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [onClickLogin, onClickSignUp, onClickSearch] = useOpenModal(setOpenLogin, setOpenSignUp, setOpenSearch);

  const LogoutMutation = useLogOut();

  const LogOut = useCallback(() => {
    LogoutMutation.mutate();
  }, [LogoutMutation]);

  const gotoWrite = useCallback(() => {
    router.push({
      pathname: "/Write",
      query: { mode: "Write" },
    });
  }, [router]);

  return (
    <>
      <div className={styles.HeaderRight}>
        {IsAdmin(UserInfo) && <span onClick={gotoWrite}>글 작성</span>}
        <span onClick={onClickSearch}>
          <SearchIcon />
        </span>
        {UserInfo === null ? (
          <>
            <span onClick={onClickLogin}>
              <AccountIcon />
            </span>
            {/* <span onClick={onClickLogin}>로그인</span>
            <span onClick={onClickSignUp}>회원가입</span> */}
          </>
        ) : (
          <>
            <span>{UserInfo?.nickname}님</span>
            <span onClick={LogOut}>로그아웃</span>
          </>
        )}
      </div>
      {openLogin && <LoginModal setOpen={setOpenLogin} openSignUp={onClickSignUp} />}
      {openSignUp && <SignUpModal setOpen={setOpenSignUp} />}
      {openSearch && <SearchModal setOpen={setOpenSearch} />}
    </>
  );
};

export default HeaderRight;
