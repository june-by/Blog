import React from "react";
import { usePostContext } from "context/postContext";
import dateForm from "utils/dateForm";

const PostDate = () => {
  const { createdAt } = usePostContext();

  if (!createdAt) return null;

  return <span>{dateForm(createdAt)}</span>;
};

export default PostDate;
