import React, { PropsWithChildren } from "react";
import { WithAdminProps } from "./types";
import { getUserData } from "@services/user";
import { cookies } from "next/headers";
import { IsAdmin } from "@utils";

const WithAdminOnServer = async ({
  children,
  onInvalid,
  fallback,
}: PropsWithChildren<WithAdminProps>) => {
  const userData = await getUserData(cookies().toString());

  if (!IsAdmin(userData)) {
    onInvalid?.();
    return fallback;
  }

  return <>{children}</>;
};

export default WithAdminOnServer;
