import "styles/globals.css";
import "styles/Editor.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Head from "next/head";
import ProgressBar from "components/shared/ProgressBar";
import useSetProgressState from "Hooks/useSetProgressState";
import useCheckVisitor from "Hooks/useCheckVisitor";
import { useRouter } from "next/router";
import { ThemeContainer } from "context/themeContext";
import MyToastContainer from "components/shared/MyToastContainer";
import PageSkeleton from "components/PageSkeleton/PageSkeleton";
import Header from "components/Header";
import PageLayout from "components/shared/PageLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState<boolean>(false);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useSetProgressState(setLoading, setNextUrl);
  useCheckVisitor(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContainer>
        <Hydrate state={pageProps.dehydratedState}>
          <>
            <Header />
            <PageLayout>
              {loading ? (
                <PageSkeleton nextUrl={nextUrl || router.pathname} />
              ) : (
                <>
                  <Head>
                    <meta charSet="utf-8"></meta>
                    <title>ByJuun.com</title>
                    <link rel="shortcut icon" href="/favicon.ico" />
                  </Head>
                  <Component {...pageProps} />
                  <MyToastContainer />
                  <ReactQueryDevtools initialIsOpen={false} />
                </>
              )}
            </PageLayout>
            <ProgressBar />
          </>
        </Hydrate>
      </ThemeContainer>
    </QueryClientProvider>
  );
}

export default MyApp;
