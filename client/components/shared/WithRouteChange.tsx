import React, { useEffect, useState, type ReactNode } from "react";
import { Router, useRouter } from "next/router";
import ProgressBar from "./ProgressBar";
import PageLayout from "./PageLayout";
import LoadingOrNot from "./LoadingOrNot";

interface Props {
  children: ReactNode;
  routeChangeFallback: (url: string) => JSX.Element;
}

const WithRouteChange = ({ children, routeChangeFallback }: Props) => {
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const start = (nextUrl: string) => {
      window.scrollTo({ top: 0 });
      setNextUrl(nextUrl);
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

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
