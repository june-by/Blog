import React, { useState, type ReactNode, useCallback } from "react";
import { useRouter } from "next/router";
import ProgressBar from "./ProgressBar";
import PageLayout from "./PageLayout";
import LoadingOrNot from "./LoadingOrNot";
import { useRouteChange } from "@hooks";

interface Props {
  children: ReactNode;
  routeChangeFallback: (url: string) => JSX.Element;
}

const WithRouteChange = ({ children, routeChangeFallback }: Props) => {
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const router = useRouter();

  const onRouteChangeStart = useCallback((url: string) => {
    window.scrollTo({ top: 0 });
    setNextUrl(url);
    setLoading(true);
  }, []);

  const onRouteChangeEnd = useCallback(() => {
    setLoading(false);
  }, []);

  useRouteChange({
    onRouteChangeStart,
    onRouteChangeComplete: onRouteChangeEnd,
    onRouteChangeError: onRouteChangeEnd,
  });

  const url = nextUrl || router.pathname;

  return (
    <>
      <PageLayout url={url}>
        <LoadingOrNot isLoading={loading} onLoading={routeChangeFallback(url)}>
          <>{children}</>
        </LoadingOrNot>
      </PageLayout>
      <ProgressBar />
    </>
  );
};

export default WithRouteChange;
