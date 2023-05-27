import { PostsPageQueryType } from "Types/page";
import MESSAGE from "constants/message";
import { useRouter } from "next/router";
import React, { ComponentType, useCallback, useEffect, useState } from "react";

function withPostsQueryValidation<P extends object>(Component: ComponentType<P>) {
  return function WihLoadingComponent({ ...props }: P) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const query = router.query as PostsPageQueryType;

    const isQueryInValid = !(query.search || query.tag || query.category);

    const queryInvalidCallBack = useCallback(() => {
      alert(MESSAGE.INVALIDE_ACCESS);
      window.location.replace("/");
    }, []);

    useEffect(() => {
      if (isQueryInValid) queryInvalidCallBack();
      else setLoading(false);
    }, [query, isQueryInValid]);

    if (loading) return null;

    return <Component {...props} />;
  };
}
export default withPostsQueryValidation;
