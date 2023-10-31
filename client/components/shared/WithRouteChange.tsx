"use client";

import React, { useState, type ReactNode, useCallback, Suspense } from "react";
import { usePathname } from "next/navigation";
import ProgressBar from "./ProgressBar";
import PageLayout from "./PageLayout";
import { useRouteChange } from "@hooks";

interface Props {
  children: ReactNode;
  routeChangeFallback: (url: string) => JSX.Element | Promise<JSX.Element>;
}

const WithRouteChange = ({ children, routeChangeFallback }: Props) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

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

  const url = nextUrl || pathname || "";

  return (
    <>
      <PageLayout url={url}>
        <Suspense fallback={<p>Loading...</p>}>
          {loading ? <>{routeChangeFallback(url)}</> : children}
        </Suspense>
      </PageLayout>
      <ProgressBar />
    </>
  );
};

export default WithRouteChange;
