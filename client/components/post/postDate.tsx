import React from "react";
import { DATE_FORM, convertDateToString } from "@utils";
import { PostType } from "@Types/post";

interface Props {
  date: PostType["createdAt"];
}

const PostDate = ({ date }: Props) => {
  return (
    <span>{convertDateToString({ date, converter: DATE_FORM["ko"] })}</span>
  );
};

export default PostDate;
