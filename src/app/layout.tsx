import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Header from "@/components/shared/Header";
import ToastContainer from "@/components/shared/ToastContainer";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { Metadata } from "next";
import { SITE_BASE_URL, STTE_DESCRIPTION, STTE_TITLE } from "@/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: STTE_TITLE,
  description: STTE_DESCRIPTION,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <Header />
            <main>{children}</main>
            <ToastContainer />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
