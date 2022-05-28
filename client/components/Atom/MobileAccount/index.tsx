import React, { useCallback, useState } from "react";
import useOpenModal from "../../../Hooks/useOpenModal";
import { useGetUserInfo, useLogOut } from "../../../Hooks/User";
import LoginModal from "../../Block/LoginModal";
import SearchModal from "../../Block/SearchModal";
import SignUpModal from "../../Block/SignUpModal";

const MobileAccount = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const { data: UserInfo, isLoading } = useGetUserInfo();
  const LogoutMutation = useLogOut();

  const [onClickLogin, onClickSignUp, onClickSearch] = useOpenModal(setOpenLogin, setOpenSignUp, setOpenSearch);

  const onClickMenu = useCallback(
    (menu: string) => () => {
      if (menu === "검색") onClickSearch();
      else if (menu === "로그인") onClickLogin();
      else if (menu === "회원가입") onClickSignUp();
      else if (menu === "로그아웃") LogoutMutation.mutate();
      else return;
    },
    []
  );

  return (
    <>
      {UserInfo !== null ? (
        <>
          {["검색", "로그아웃"].map((menu) => {
            return (
              <div key={menu} onClick={onClickMenu(menu)}>
                {menu}
              </div>
            );
          })}
        </>
      ) : (
        <>
          {["검색", "로그인", "회원가입"].map((menu) => {
            return (
              <div key={menu} onClick={onClickMenu(menu)}>
                {menu}
              </div>
            );
          })}
        </>
      )}
      {openLogin && <LoginModal setOpen={setOpenLogin} />}
      {openSignUp && <SignUpModal setOpen={setOpenSignUp} />}
      {openSearch && <SearchModal setOpen={setOpenSearch} />}
    </>
  );
};

export default MobileAccount;
