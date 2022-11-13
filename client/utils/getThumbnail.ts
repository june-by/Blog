interface KeyIndex {
  [key: string]: string;
}

const ThumbNail: KeyIndex = {
  JavaScript: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/javascript.png",
  React: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/React.png",
  Web: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/Web.png",
  TypeScript: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/TypeScript.png",
  NodeJs: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/nodejs.png",
  OperatingSystem: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/OS.png",
  DataStructure: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/DataStructure.png",
  "HTML-CSS": "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/HTMLCSS.png",
  NetWork: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/NetWork.jpeg",
  학교공부: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/schoolstudy.png",
  Algorithm: "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/programmers.png",
};

export const getThumbNail = (category: string) => ThumbNail[category];
