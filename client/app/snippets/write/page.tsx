import React from "react";
import { SnippetWriteForm } from "@components/snippets";
import { notFound } from "next/navigation";
import WithAdmin from "@components/shared/WithAdmin";

const SnippetWritePage = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <WithAdmin onInvalid={notFound}>
        <SnippetWriteForm />
      </WithAdmin>
    </>
  );
};

export default SnippetWritePage;
