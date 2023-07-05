import IconButton from "components/shared/IconButton";
import WriteIcon from "components/Icon/write";
import { useGetUserInfo } from "Hooks/User";
import { useRouter } from "next/router";
import React from "react";
import IsAdmin from "utils/isAdmin";
import styles from "./styles.module.scss";

const WriteButton = () => {
  const { push } = useRouter();
  const { data: userInfo, isLoading } = useGetUserInfo();

  const gotoWrite = () => {
    push({
      pathname: "/Write",
      query: { mode: "Write" },
    });
  };

  if (isLoading || !IsAdmin(userInfo)) return null;
  return (
    <button type="button" onClick={gotoWrite} className={styles.writeButton}>
      새 글 작성
    </button>
  );
};

export default WriteButton;
