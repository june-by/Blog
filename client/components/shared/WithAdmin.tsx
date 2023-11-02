import React, { PropsWithChildren } from "react";
import { cookies } from "next/headers";
import https from "https";
import { IsAdmin, customAxios } from "@utils";

interface Props {
  fallback?: JSX.Element | null;
  onInvalid?: () => void;
}

const WithAdmin = async ({
  children,
  fallback,
  onInvalid,
}: PropsWithChildren<Props>) => {
  const userData = await getUser();

  if (!IsAdmin(userData)) {
    onInvalid?.();
    return fallback;
  }

  return children;
};

export default WithAdmin;

async function getUser() {
  try {
    customAxios.defaults.headers.Cookie = cookies().toString();

    const { data } = await customAxios.get("/user", {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    return data;
  } catch (err) {
    return null;
  }
}
