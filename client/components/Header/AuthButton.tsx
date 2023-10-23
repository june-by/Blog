import React, { useState } from "react";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { MESSAGE } from "@constants";
import { useLogOut } from "@hooks/query";
import { LoginModal } from "@components/shared/Modal/LoginModal";
import { SignUpModal } from "@components/shared/Modal/SignUpModal";

interface AuthButtonProps {
  isLoggedIn: boolean;
}

const AuthButton = ({ isLoggedIn }: AuthButtonProps) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const { mutate: logoutMutate } = useLogOut({
    onSuccess: () => toast.success(MESSAGE.LOGOUT_SUCCESS),
  });

  const handleClickButton = () => {
    if (isLoggedIn) {
      logoutMutate();
    } else {
      setOpenLoginModal(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClickButton}
        className={styles.AuthButton}
      >
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
      {openLoginModal && (
        <LoginModal
          setOpenLoginModal={setOpenLoginModal}
          setOpenSignUpModal={setOpenSignUpModal}
        />
      )}
      {openSignUpModal && (
        <SignUpModal setOpenSignUpModal={setOpenSignUpModal} />
      )}
    </>
  );
};

export default AuthButton;
