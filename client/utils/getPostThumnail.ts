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
    case "OperatingSystem":
      return "/OS.png";
    case "DataStructure":
      return "/DataStructure.png";
    case "Web":
      return "/Web.png";
    case "HTML-CSS":
      return "/HTMLCSS.png";
    case "학교공부":
      return "schoolstudy.png";
    default:
      return "";
  }
};
