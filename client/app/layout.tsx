import "@styles/globals.css";
import "@styles/Editor.css";
import "react-toastify/dist/ReactToastify.css";

import { cookies } from "next/headers";
import Header from "@components/Header";
import Providers from "@components/Providers";
import CommonSEO from "@components/shared/CommonSEO";
import { Modals } from "@components/shared/Modals";
import MyToastContainer from "@components/shared/MyToastContainer";
import { PropsWithChildren } from "react";
import WithRouteChange from "@components/shared/WithRouteChange";
import PageSkeleton from "@components/PageSkeleton";

const RootLayout = ({ children }: PropsWithChildren) => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Nanum+Myeongjo:wght@800&family=Roboto+Slab:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-theme={theme}>
        <Providers>
          <Header />
          <WithRouteChange
            routeChangeFallback={async (url) => {
              "use server";
              return <PageSkeleton url={url} />;
            }}
          >
            <CommonSEO />
            {children}
            <Modals />
            <MyToastContainer />
          </WithRouteChange>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
