import React from "react";
import { SnippetWriteForm } from "@components/snippets";
import { getSnippet } from "@services/snippet";

interface Props {
  searchParams: {
    mode?: "edit" | "write";
    id?: string;
  };
}

const SnippetWritePage = async ({ searchParams }: Props) => {
  const mode = searchParams?.mode || "write";
  const id = Number(searchParams.id);
  const snippetData = await getSnippet({ id });

  return <SnippetWriteForm mode={mode} id={id} snippetData={snippetData} />;
};

export default SnippetWritePage;
