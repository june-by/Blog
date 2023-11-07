"use client";
import NotFoundPageIndicator from "@components/shared/NotFoundPageIndicator";
import WithAdminValidation from "@components/shared/WithAdminValidation";
import React, { PropsWithChildren } from "react";

interface Props {
  isPublic: number;
}

const WithPostPublicValidation = ({
  children,
  isPublic,
}: PropsWithChildren<Props>) => {
  if (isPublic) {
    return <>{children}</>;
  }
  return (
    <WithAdminValidation
      fallback={<NotFoundPageIndicator text="준비중인 포스트입니다." />}
    >
      {children}
    </WithAdminValidation>
  );
};

export default WithPostPublicValidation;
