import "../styles/globals.css";
import "../styles/Editor.css";
import type { AppContext, AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Layout/Header";
import Loading from "../utils/Loading";
import ProgressBar from "../components/Atom/ProgressBar";
import useSetProgressState from "../Hooks/useSetProgressState";
import { ThemeProvider } from "../utils/ThemeContext";
import cookies from "next-cookies";
import App from "next/app";
import useCheckVisitor from "../Hooks/useCheckVisitor";

interface CustomAppProps extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme }: CustomAppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string>("");
  useSetProgressState(setLoading, setNextUrl);
  useCheckVisitor();
  return (
    <>
      {loading ? (
        <>{Loading(nextUrl, theme)}</>
      ) : (
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider initialTheme={theme}>
              <Header />
              <Head>
                <meta charSet="utf-8"></meta>
                <title>ByJuun.com</title>
                <link rel="shortcut icon" href="/favicon.ico" />
              </Head>
              <Component {...pageProps} theme={theme} />
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      )}
      <ProgressBar />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const allCookies = cookies(ctx);
  const appProps = await App.getInitialProps(appContext);
  const theme = allCookies["theme"] || "dark";
  return {
    ...appProps,
    theme: theme,
  };
};

export default MyApp;
