import React from "react";
import { PostWriteForm } from "@components/post";
import { getPost } from "@services/post";

interface Props {
  searchParams: {
    mode?: "edit" | "write";
    id?: string;
  };
}

const WritePage = async ({ searchParams }: Props) => {
  const mode = searchParams?.mode || "write";
  const id = Number(searchParams.id);
  const postData = await getPost({ id });

  return (
    <PostWriteForm mode={mode} id={id} postData={postData?.mainPost || null} />
  );
};

export default WritePage;
