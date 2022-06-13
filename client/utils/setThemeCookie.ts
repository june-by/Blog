import Cookies from "js-cookie";

function setThemeCookie(theme: string) {

	const expires = new Date();
	expires.setDate(Date.now() + 1000 * 60 * 60 * 24);

	Cookies.set("theme", theme, {
		path: "/",
		expires,
	});

}

export { setThemeCookie };