import { useLogOut } from "Hooks/User";
import React from "react";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import MESSAGE from "constants/message";

const LogoutButton = () => {
  const onSuccessLogout = () => {
    toast.success(MESSAGE.LOGOUT_SUCCESS);
  };
  const { mutate: logoutMutate } = useLogOut({ onSuccess: onSuccessLogout });
  return (
    <button type="button" onClick={() => logoutMutate()} className={styles.LoginButton}>
      로그아웃
    </button>
  );
};

export default LogoutButton;
