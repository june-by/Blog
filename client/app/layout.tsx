import "@styles/globals.css";
import "@styles/Editor.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "@components/Header";
import Providers from "@components/Providers";
import Overlays from "@components/shared/Overlays";
import MyToastContainer from "@components/shared/MyToastContainer";
import { PropsWithChildren } from "react";
import ProgressBar from "@components/shared/ProgressBar";
import styles from "./styles.module.scss";

export const metadata = {
  metadataBase: new URL("https://byjuun.com"),
};

const RootLayout = ({ children }: PropsWithChildren) => {
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
      <body data-theme="dark">
        <Providers>
          <Header />
          <section className={styles.layout}>
            {children}
            <Overlays />
            <MyToastContainer />
            <ProgressBar />
          </section>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
