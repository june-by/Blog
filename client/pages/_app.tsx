import "@styles/globals.css";
import "@styles/Editor.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useCheckVisitor } from "@hooks";
import { ThemeProvider } from "@contexts/themeContext";
import MyToastContainer from "components/shared/MyToastContainer";
import PageSkeleton from "components/PageSkeleton/PageSkeleton";
import Header from "components/Header";
import CommonSEO from "components/shared/CommonSEO";
import WithRouteChange from "components/shared/WithRouteChange";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useCheckVisitor(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <WithRouteChange
            routeChangeFallback={(url) => <PageSkeleton url={url} />}
          >
            <CommonSEO />
            <Component {...pageProps} />
            <MyToastContainer />
            <ReactQueryDevtools initialIsOpen={false} />
          </WithRouteChange>
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
