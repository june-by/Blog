"use client";

import { useGetUserQuery } from "@hooks/query";
import { IsAdmin } from "@utils";
import LoadingOrNot from "./LoadingOrNot";
import SwitchCase from "./SwitchCase";
import { PropsWithChildren, useEffect } from "react";

interface Props {
  fallback?: JSX.Element | null;
  onInvalid?: () => void;
}

const WithAdminValidation = ({
  children,
  fallback = null,
  onInvalid,
}: PropsWithChildren<Props>) => {
  const { data: userInfo, isLoading } = useGetUserQuery();
  const isAdmin = IsAdmin(userInfo);

  useEffect(() => {
    if (!onInvalid) {
      return;
    }
    if (isLoading) {
      return;
    }
    if (!IsAdmin(userInfo)) {
      onInvalid();
    }
  }, [isLoading, onInvalid, userInfo]);

  return (
    <LoadingOrNot isLoading={isLoading} onLoading={fallback}>
      <SwitchCase
        value={String(isAdmin)}
        caseBy={{
          true: children,
          false: fallback,
        }}
      />
    </LoadingOrNot>
  );
};

export default WithAdminValidation;
