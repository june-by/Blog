import React from "react";
import styles from "./styles.module.scss";
import WriteButton from "./writeButton";
import AuthButton from "./AuthButton";
import { useGetUserQuery } from "@hooks/query";
import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";
import PageNavigaition from "./PageNavigaition";
import MobileMenuToggleButton from "./MobileMenuToggleButton";
import HideByScrollDown from "@components/shared/HideByScrollDown/HideByScrollDown";

const HEADER_HEIGHT = "65px";

const Header = () => {
  const { data: userData } = useGetUserQuery();

  const isLoggedIn = !!userData;

  return (
    <HideByScrollDown
      tagName="header"
      hideDirection="top"
      valueForHide={`-${HEADER_HEIGHT}`}
      position={{ top: "0px" }}
      className={styles.headerStyleWrap}
    >
      <div className={styles.headerContentWrap}>
        <Logo />
        <div className={styles.headerRightWrap}>
          {isLoggedIn && (
            <span>
              <strong>{userData.nickname}</strong>님
            </span>
          )}
          <PageNavigaition />
          <WriteButton />
          <AuthButton isLoggedIn={isLoggedIn} />
          <ThemeToggleButton />
          <MobileMenuToggleButton />
        </div>
      </div>
    </HideByScrollDown>
  );
};

export default Header;
