import React from "react";

interface Props {
  nickname?: string;
}

const UserNickname = ({ nickname }: Props) => {
  if (!nickname) return null;
  return (
    <span>
      <strong>{nickname}</strong>님
    </span>
  );
};

export default UserNickname;
