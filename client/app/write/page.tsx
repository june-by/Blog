import React from "react";
import WithAdmin from "@components/shared/WithAdmin";
import { PostWriteForm } from "@components/post";
import { notFound } from "next/navigation";

const WritePage = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <WithAdmin onInvalid={notFound}>
        <PostWriteForm />
      </WithAdmin>
    </>
  );
};

export default WritePage;
