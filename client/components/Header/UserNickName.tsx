import { UserType } from "@Types/user";
import React from "react";

const UserNickName = ({ nickname }: Partial<Pick<UserType, "nickname">>) => {
  if (!nickname) return null;

  return (
    <span>
      <strong>{nickname}</strong>님
    </span>
  );
};

export default UserNickName;
