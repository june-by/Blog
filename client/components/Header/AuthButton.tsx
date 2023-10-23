import React from "react";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { MESSAGE } from "@constants";
import { useLogOut } from "@hooks/query";
import useModals from "@hooks/useModals";
import { MODALS } from "@components/shared/Modals/Modals";

interface AuthButtonProps {
  isLoggedIn: boolean;
}

const AuthButton = ({ isLoggedIn }: AuthButtonProps) => {
  const { openModal } = useModals();

  const { mutate: logoutMutate } = useLogOut({
    onSuccess: () => toast.success(MESSAGE.LOGOUT_SUCCESS),
  });

  const handleClickButton = () => {
    if (isLoggedIn) {
      logoutMutate();
    } else {
      openModal(MODALS.LOGIN);
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
    </>
  );
};

export default AuthButton;
