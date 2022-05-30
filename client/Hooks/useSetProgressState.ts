import { Router } from "next/router";
import React, { useEffect } from "react";


type SetLoading = React.Dispatch<React.SetStateAction<boolean>>
type SetNextUrl = React.Dispatch<React.SetStateAction<string>>

const useSetProgressState = (setLoading: SetLoading, setNextUrl: SetNextUrl) => {
	useEffect(() => {
		const start = (nextUrl: string) => {
			setNextUrl(nextUrl);
			setLoading(true);
		};
		const end = () => {
			setLoading(false);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);
};

export default useSetProgressState;
