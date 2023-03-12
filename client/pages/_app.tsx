import "styles/globals.css";
import "styles/Editor.css";
import type { AppContext, AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Head from "next/head";
import Header from "components/Block/Header";
import Loading from "utils/Loading";
import ProgressBar from "components/Atom/ProgressBar";
import useSetProgressState from "Hooks/useSetProgressState";
import App from "next/app";
import useCheckVisitor from "Hooks/useCheckVisitor";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useSetProgressState(setLoading, setNextUrl);
  useCheckVisitor(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {loading ? (
        <>{Loading(nextUrl || router.pathname)}</>
      ) : (
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <Head>
            <meta charSet="utf-8"></meta>
            <title>ByJuun.com</title>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      )}
      <ProgressBar />
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
  };
};

export default MyApp;
