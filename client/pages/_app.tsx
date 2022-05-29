import "../styles/globals.css";
import "../styles/Editor.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Layout/Header";
import Loading from "../utils/Loading";
import ProgressBar from "../components/Atom/ProgressBar";
import useSetProgressState from "../Hooks/useSetProgressState";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState<boolean>(false);
  useSetProgressState(setLoading);
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
