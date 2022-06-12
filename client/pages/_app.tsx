import "../styles/globals.css";
import "../styles/Editor.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Layout/Header";
import Loading from "../utils/Loading";
import ProgressBar from "../components/Atom/ProgressBar";
import useSetProgressState from "../Hooks/useSetProgressState";
import { ThemeProvider } from "../utils/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string>("");
  useSetProgressState(setLoading, setNextUrl);
  return (
    <>
      {loading ? (
        <>{Loading(loading, nextUrl)}</>
      ) : (
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider>
              <Header />
              <Head>
                <meta charSet="utf-8"></meta>
                <title>ByJuun.com</title>
                <link rel="shortcut icon" href="/favicon.ico" />
              </Head>
              <Component {...pageProps} />
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      )}
      <ProgressBar />
    </>
  );
}

export default MyApp;
