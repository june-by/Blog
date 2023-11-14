"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { WithAdminProps } from "./types";
import { useGetUserQuery } from "@hooks/query";
import { IsAdmin } from "@utils";

const WithAdminOnClient = ({
  children,
  onInvalid,
  fallback,
}: PropsWithChildren<WithAdminProps>) => {
  const { data: userInfo, isLoading } = useGetUserQuery();
  const isAdmin = IsAdmin(userInfo);

  useEffect(() => {
    if (!onInvalid) {
      return;
    }
    if (isLoading) {
      return;
    }
    if (!isAdmin) {
      onInvalid?.();
    }
  }, [isLoading, onInvalid, isAdmin]);

  if (isLoading || !isAdmin) {
    return fallback;
  } else {
    return <>{children}</>;
  }
};

export default WithAdminOnClient;
