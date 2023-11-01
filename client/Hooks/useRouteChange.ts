import { Router } from "next/router";
import { useEffect } from "react";

interface Params {
  onRouteChangeStart: (nextUrl: string) => void;
  onRouteChangeComplete: () => void;
  onRouteChangeError: () => void;
}

const useRouteChange = ({
  onRouteChangeStart,
  onRouteChangeComplete,
  onRouteChangeError,
}: Params) => {
  useEffect(() => {
    Router.events.on("routeChangeStart", onRouteChangeStart);
    Router.events.on("routeChangeComplete", onRouteChangeComplete);
    Router.events.on("routeChangeError", onRouteChangeError);
    return () => {
      Router.events.off("routeChangeStart", onRouteChangeStart);
      Router.events.off("routeChangeComplete", onRouteChangeComplete);
      Router.events.off("routeChangeError", onRouteChangeError);
    };
  }, [onRouteChangeComplete, onRouteChangeError, onRouteChangeStart]);
};

export default useRouteChange;
