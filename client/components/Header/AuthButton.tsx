import React from "react";
import styles from "./styles.module.scss";
import { useHeaderContext } from "@contexts/headerContext";
import { toast } from "react-toastify";
import { MESSAGE } from "@constants";
import { useLogOut } from "@hooks/query";

interface AuthButtonProps {
  isLoggedIn: boolean;
}

const AuthButton = ({ isLoggedIn }: AuthButtonProps) => {
  const { ButtonText, handleButtonClick } = useAuth({ isLoggedIn });

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className={styles.AuthButton}
    >
      {ButtonText}
    </button>
  );
};

const useAuth = ({ isLoggedIn }: AuthButtonProps) => {
  const { openLogin } = useHeaderContext();
  const onSuccessLogout = () => {
    toast.success(MESSAGE.LOGOUT_SUCCESS);
  };
  const { mutate: logoutMutate } = useLogOut({ onSuccess: onSuccessLogout });

  const ButtonText = isLoggedIn ? "로그아웃" : "로그인";

  const handleButtonClick = isLoggedIn ? () => logoutMutate() : openLogin;

  return { ButtonText, handleButtonClick };
};

export default AuthButton;
