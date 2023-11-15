import { PAGE } from "@constants";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import FontAppliedElement from "@components/shared/FontAppliedElement";
import classnames from "classnames";
import { useOverlay } from "@hooks";
import { OVERLAYS } from "@components/shared/Overlays/Overlays";

interface Props {
  isOpen: boolean;
  onExit: (time: number) => void;
}

const MobileMenu = ({ onExit }: Props) => {
  const [isClose, setIsClose] = useState(false);
  const pathname = usePathname();
  const { openOverlay } = useOverlay();

  const closeWithAnimation = () => {
    setIsClose(true);
    onExit(500);
  };

  const handleClickLoginButton = () => {
    closeWithAnimation();
    openOverlay(OVERLAYS.LOGIN_MODAL);
  };

  const handleClickSignUpButton = () => {
    closeWithAnimation();
    openOverlay(OVERLAYS.SIGNUP_MODAL);
  };

  return (
    <div
      className={classnames(styles.MobileMenu, {
        [styles.closeAnimation]: isClose,
      })}
    >
      <div className={styles.closeArea}>
        <button onClick={closeWithAnimation}>
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
            onClick={closeWithAnimation}
            className={classnames({
              [styles.current]: isCurrentPath(url, pathname),
            })}
          >
            {text}
          </Link>
        ))}
      </FontAppliedElement>
    </div>
  );
};

const isCurrentPath = (url: string, pathname: string | null) =>
  pathname === url;

export default MobileMenu;
