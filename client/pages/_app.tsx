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
import { ThemeProvider } from "@contexts/themeContext";
import MyToastContainer from "@components/shared/MyToastContainer";
import PageSkeleton from "@components/PageSkeleton/PageSkeleton";
import CommonSEO from "@components/shared/CommonSEO";
import WithRouteChange from "@components/shared/WithRouteChange";
import Header from "@components/Header";
import { ModalProvider } from "@contexts/modalContex";
import { Modals } from "@components/shared/Modals";
import { useEffect } from "react";
import { getIsVisitedWithInADay, setIsVisitedInStorage } from "@utils";
import { QUERY_KEY } from "@constants";
import { addVisitorAPI } from "@services/visitor";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const countVisitor = async () => {
    const isVisitedWithInADay = getIsVisitedWithInADay();

    if (isVisitedWithInADay) {
      return;
    }

    setIsVisitedInStorage();
    queryClient.setQueryData([QUERY_KEY.VISITOR], await addVisitorAPI());
  };

  useEffect(() => {
    countVisitor();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <ModalProvider>
            <Header />
            <WithRouteChange
              routeChangeFallback={(url) => <PageSkeleton url={url} />}
            >
              <CommonSEO />
              <Component {...pageProps} />
              <Modals />
              <MyToastContainer />
              <ReactQueryDevtools initialIsOpen={false} />
            </WithRouteChange>
          </ModalProvider>
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
