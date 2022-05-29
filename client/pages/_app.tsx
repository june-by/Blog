import "../styles/globals.css";
import "../styles/Editor.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Layout/Header";
import { Router, useRouter } from "next/router";
import Loading from "../utils/Loading";
import ProgressBar from "../components/Atom/ProgressBar";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const start = () => {
      console.log(router);
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log(router);
      console.log("findished");
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
  }, [router]);
  return (
    <>
      {loading ? (
        <>{Loading(loading)}</>
      ) : (
        <QueryClientProvider client={queryClient}>
          <Header />
          <Head>
            <meta charSet="utf-8"></meta>
            <title>ByJuun.com</title>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      )}
      <ProgressBar />
    </>
  );
}

export default MyApp;
