import WriteIcon from "components/Icon/write";
import { useRouter } from "next/router";
import React from "react";
import IconBtn from "../IconBtn";

const PostEditBtn = ({ id }: { id: number }) => {
  const router = useRouter();

  const gotoEdit = () => {
    router.push({
      pathname: "/Write",
      query: { mode: "Edit", id: id },
    });
  };

  return <IconBtn data-testid="postEditBtn" Icon={<WriteIcon />} onClick={gotoEdit} />;
};

export default React.memo(PostEditBtn);
