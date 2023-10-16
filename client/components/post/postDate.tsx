import React from "react";
import { usePostContext } from "@contexts/postContext";
import { DATE_FORM, convertDateToString } from "@utils";

const PostDate = () => {
  const { createdAt } = usePostContext();

  if (!createdAt) {
    return null;
  }

  return (
    <span>
      {convertDateToString({ date: createdAt, converter: DATE_FORM["ko"] })}
    </span>
  );
};

export default PostDate;
