import MESSAGE from "constants/message";
import { useRouter } from "next/router";
import React, { ComponentType, useEffect, useState } from "react";

function withPostsQueryValidation<P extends object>(Component: ComponentType<P>) {
  return function WihLoadingComponent({ ...props }) {
    const [loading, setLoading] = useState(false);
    const { query } = useRouter();

    useEffect(() => {
      if (!(query?.search || query?.tag || query?.category)) {
        alert(MESSAGE.INVALIDE_ACCESS);
        window.location.replace("/");
        return;
      } else setLoading(false);
    }, [query]);

    if (loading) return <></>;

    return <Component {...(props as P)} />;
  };
}
export default withPostsQueryValidation;
