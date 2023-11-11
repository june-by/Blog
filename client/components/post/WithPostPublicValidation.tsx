"use client";
import { PostType } from "@Types/post";
import NotFoundPageIndicator from "@components/shared/NotFoundPageIndicator";
import WithAdminOnClient from "@components/shared/WithAdmin/WithAdminOnClient";
import React, { PropsWithChildren } from "react";

const WithPostPublicValidation = ({
  children,
  isPublic,
}: PropsWithChildren<Pick<PostType, "isPublic">>) => {
  if (isPublic) {
    return <>{children}</>;
  }
  return (
    <WithAdminOnClient
      fallback={<NotFoundPageIndicator text="준비중인 포스트입니다." />}
    >
      {children}
    </WithAdminOnClient>
  );
};

export default WithPostPublicValidation;
