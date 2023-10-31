import { PAGE } from "@constants";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import LeftSlideLayer from "@components/shared/LeftSlideLayer";
import FontAppliedElement from "@components/shared/FontAppliedElement";
import classnames from "classnames";
import { useModals } from "@hooks";
import { MODALS } from "@components/shared/Modals/Modals";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const MobileMenu = ({ isOpen, handleClose }: Props) => {
  const pathname = usePathname();
  const { openModal } = useModals();

  const handleClickLoginButton = () => {
    handleClose();
    openModal(MODALS.LOGIN);
  };

  const handleClickSignUpButton = () => {
    handleClose();
    openModal(MODALS.SIGNUP);
  };

  return (
    <LeftSlideLayer isOpen={isOpen} className={styles.MobileMenu}>
      <div className={styles.closeArea}>
        <button onClick={handleClose}>
          <IoClose />
        </button>
      </div>
      <FontAppliedElement tagName="div" className={styles.Navigator}>
        <FontAppliedElement tagName="button" onClick={handleClickLoginButton}>
          LOGIN
        </FontAppliedElement>
        <FontAppliedElement tagName="button" onClick={handleClickSignUpButton}>
          SIGNUP
        </FontAppliedElement>
        {Object.values(PAGE).map(({ text, url }) => (
          <Link
            key={text}
            href={url}
            onClick={handleClose}
            className={classnames({
              [styles.current]: isCurrentPath(url, pathname),
            })}
          >
            {text}
          </Link>
        ))}
      </FontAppliedElement>
    </LeftSlideLayer>
  );
};

const isCurrentPath = (url: string, pathname: string | null) =>
  pathname === url;

export default MobileMenu;
