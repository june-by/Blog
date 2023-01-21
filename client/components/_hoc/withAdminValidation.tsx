import { useGetUserInfo } from "Hooks/User";
import { useRouter } from "next/router";
import React, { ComponentType, useEffect, useState } from "react";

function withAdminValidation<P extends object>(Component: ComponentType<P>) {
  return function WihLoadingComponent({ ...props }) {
    const { data: UserInfo, isLoading } = useGetUserInfo();
    const [loading, setLoading] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
      if (isLoading) return;
      if (UserInfo?.nickname !== "By_juun") push("/");
      else setLoading(false);
    }, [UserInfo?.nickname, isLoading, push]);

    if (loading) return <></>;
    return <Component {...(props as P)} />;
  };
}
export default withAdminValidation;
