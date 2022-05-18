export const getPostThumbNail = (category: string) => {
	switch (category) {
		case "JavaScript":
			return "/JavaScript.png";
		case "React":
			return "/React.png";
		case "TypeScript":
			return "/TypeScript.png";
		case "NodeJs":
			return "/NodeJs.png";
		case "OS":
			return "/OS.png"
		default:
			return ""
	}
}