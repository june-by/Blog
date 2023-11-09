import React, { PropsWithChildren } from "react";
import { cookies } from "next/headers";
import { IsAdmin } from "@utils";
import { getUserData } from "@services/user";

interface Props {
  fallback?: JSX.Element | null;
  onInvalid?: () => void;
}

const WithAdmin = async ({
  children,
  fallback,
  onInvalid,
}: PropsWithChildren<Props>) => {
  const userData = await getUserData(cookies().toString());

  if (!IsAdmin(userData)) {
    onInvalid?.();
    return fallback;
  }

  return <>{children}</>;
};

export default WithAdmin;
