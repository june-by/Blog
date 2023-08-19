import PAGE from "constants/page";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import { useHeaderContext } from "context/headerContext";
import LeftSlideLayer from "components/shared/LeftSlideLayer";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const MobileMenu = ({ isOpen, handleClose }: Props) => {
  const { openLogin, openSignUp } = useHeaderContext();
  const { pathname } = useRouter();

  const handleClickLoginButton = () => {
    handleClose();
    openLogin();
  };

  const handleClickSignUpButton = () => {
    openSignUp();
    handleClose();
  };

  return (
    <LeftSlideLayer isOpen={isOpen} className={styles.MobileMenu}>
      <div className={styles.closeArea}>
        <button onClick={handleClose}>
          <IoClose />
        </button>
      </div>
      <div className={styles.Navigator}>
        <button onClick={handleClickLoginButton}>LOGIN</button>
        <button onClick={handleClickSignUpButton}>SIGNUP</button>
        {Object.values(PAGE).map(({ text, url }) => (
          <Link
            key={text}
            href={url}
            className={isCurrentPath(pathname, url) ? `${styles.current}` : ""}
          >
            {text}
          </Link>
        ))}
      </div>
    </LeftSlideLayer>
  );
};

const isCurrentPath = (pathname: string, url: string) => pathname === url;

export default MobileMenu;
