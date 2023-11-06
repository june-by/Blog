import React from "react";
import styles from "./styles.module.scss";
import WriteButton from "./writeButton";
import AuthButton from "./AuthButton";
import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "./Logo";
import PageNavigaition from "./PageNavigaition";
import MobileMenuToggleButton from "./MobileMenuToggleButton";
import HideByScrollDown from "@components/shared/HideByScrollDown/HideByScrollDown";
import { getUserData } from "@services/user";
import { cookies } from "next/headers";
import UserNickName from "./UserNickName";
import WithAdmin from "@components/shared/WithAdmin";

const HEADER_HEIGHT = "65px";

const Header = async () => {
  const userData = await getUserData(cookies().toString());

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
          <UserNickName nickname={userData?.nickname} />
          <PageNavigaition />
          {/* @ts-expect-error Server Component */}
          <WithAdmin>
            <WriteButton />
          </WithAdmin>
          <AuthButton isLoggedIn={isLoggedIn} />
          <ThemeToggleButton />
          <MobileMenuToggleButton />
        </div>
      </div>
    </HideByScrollDown>
  );
};

export default Header;
