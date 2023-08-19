import PAGE from "constants/page";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import { useHeaderContext } from "context/headerContext";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const MobileMenu = ({ open, handleClose }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { openLogin, openSignUp } = useHeaderContext();
  const { pathname } = useRouter();

  useEffect(() => {
    if (!menuRef.current) return;
    if (!open) menuRef.current.style.left = "100%";
    else menuRef.current.style.left = "0";
  }, [open]);

  return (
    <div className={styles.MobileMenu} ref={menuRef}>
      <div className={styles.closeArea}>
        <button onClick={handleClose}>
          <IoClose />
        </button>
      </div>
      <div className={styles.Navigator}>
        <button
          onClick={() => {
            handleClose();
            openLogin();
          }}
        >
          LOGIN
        </button>
        <button
          onClick={() => {
            openSignUp();
            handleClose();
          }}
        >
          SIGNUP
        </button>
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
    </div>
  );
};

const isCurrentPath = (pathname: string, url: string) => pathname === url;

export default MobileMenu;
