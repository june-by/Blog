import React from "react";
import { useGetUserInfo, useLogOut } from "Hooks/User";
import LoginModal from "components/_Modal/LoginModal";
import SearchModal from "components/_Modal/SearchModal";
import SignUpModal from "components/_Modal/SignUpModal";
import { useHeaderContext } from "context/headerContext";

const MobileAccount = () => {
  const {
    isLoginModalOpen,
    isSignUpModalOpen,
    isSearchModalOpen,
    setIsLoginModalOpen,
    setIsSearchModalOpen,
    setIsSignUpModalOpen,
    openSignUp,
    openLogin,
    openSearch,
  } = useHeaderContext();

  const { data: UserInfo } = useGetUserInfo();
  const { mutate: logoutMutate } = useLogOut();

  const onClickMenu = (menu: string) => () => {
    switch (menu) {
      case "검색":
        return openSearch();
      case "로그인":
        return openLogin();
      case "회원가입":
        return openSignUp();
      case "로그아웃":
        return logoutMutate();
    }
  };

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
      {/* {isLoginModalOpen && <LoginModal setOpen={setIsLoginModalOpen} openSignUp={openSignUp} />}
      {isSignUpModalOpen && <SignUpModal setOpen={setIsSignUpModalOpen} />}
      {isSearchModalOpen && <SearchModal setOpen={setIsSearchModalOpen} />} */}
    </>
  );
};

export default MobileAccount;
