import IconButton from "components/shared/IconButton";
import AccountIcon from "components/Icon/account";
import { useHeaderContext } from "context/headerContext";
import React from "react";

const AccountButton = () => {
  const { openLogin } = useHeaderContext();
  return <IconButton onClick={openLogin} Icon={<AccountIcon />} />;
};

export default AccountButton;
