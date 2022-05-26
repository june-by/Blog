import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<>
			<QueryClientProvider client={queryClient}>
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
			</QueryClientProvider>
		</>
	);
}

export default MyApp;