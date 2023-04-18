import WriteIcon from "components/Icon/write";
import { useRouter } from "next/router";
import React from "react";
import IconButton from "../IconButton";

const PostEditBtn = ({ id }: { id: number }) => {
  const router = useRouter();

  const gotoEdit = () => {
    router.push({
      pathname: "/Write",
      query: { mode: "Edit", id: id },
    });
  };

  return <IconButton data-testid="postEditBtn" Icon={<WriteIcon />} onClick={gotoEdit} />;
};

export default React.memo(PostEditBtn);
