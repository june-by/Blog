import { useLogOut } from "Hooks/User";
import React from "react";
import styles from "./styles.module.scss";

const LogoutButton = () => {
  const { mutate: logoutMutate } = useLogOut();
  return (
    <button type="button" onClick={() => logoutMutate()} className={styles.LoginButton}>
      Log out
    </button>
  );
};

export default LogoutButton;
