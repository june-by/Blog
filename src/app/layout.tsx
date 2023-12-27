import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Header from "@/components/shared/Header";
import ToastContainer from "@/components/shared/ToastContainer";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "byjuun.com",
  description: "Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻",
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
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <Header />
            <main>{children}</main>
            <ToastContainer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
