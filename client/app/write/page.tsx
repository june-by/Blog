import React from "react";
import { getPost } from "@services/post";
import { getAllSeries } from "@services/series";
import { PostForm } from "@components/post";

interface Props {
  searchParams: {
    mode?: "edit" | "write";
    id?: string;
  };
}

const WritePage = async ({ searchParams }: Props) => {
  const mode = searchParams?.mode || "write";
  const id = Number(searchParams.id);

  const [postData, seriesList] = await Promise.all([
    getPost({ id }),
    getAllSeries(),
  ]);

  return (
    <PostForm
      mode={mode}
      id={id}
      postData={postData?.mainPost || null}
      seriesList={seriesList}
    />
  );
};

export default WritePage;
