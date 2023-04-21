import IconButton from "components/shared/IconButton";
import WriteIcon from "components/Icon/write";
import { useGetUserInfo } from "Hooks/User";
import { useRouter } from "next/router";
import React from "react";
import IsAdmin from "utils/isAdmin";

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
  return <IconButton onClick={gotoWrite} Icon={<WriteIcon />} />;
};

export default WriteButton;
