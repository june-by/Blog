import IconButton from "components/Atom/IconButton";
import LogoutIcon from "components/Icon/logout";
import { useLogOut } from "Hooks/User";
import React from "react";

const LogoutButton = () => {
  const { mutate: logoutMutate } = useLogOut();

  return <IconButton onClick={() => logoutMutate()} Icon={<LogoutIcon />} />;
};

export default LogoutButton;
