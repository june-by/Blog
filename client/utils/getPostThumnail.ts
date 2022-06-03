export const getPostThumbNail = (category: string) => {
  switch (category) {
    case "JavaScript":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/javascript.png";
    case "React":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/React.png";
    case "Web":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Web.png";
    case "TypeScript":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/TypeScript.png";
    case "NodeJs":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/nodejs.png";
    case "OperatingSystem":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/OS.png";
    case "DataStructure":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/DataStructure.png";
    case "HTML-CSS":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/HTMLCSS.png";
    case "NetWork":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/NetWork.jpeg";
    case "학교공부":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/schoolstudy.png";
    case "Algorithm":
      return "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/programmers.png";
    default:
      return "";
  }
};
