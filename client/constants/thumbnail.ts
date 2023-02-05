interface thumbNailType {
  [key: string]: { jpg: string; webp: string };
}

const THUMBNAIL: thumbNailType = {
  JavaScript: {
    webp: `javascript.webp`,
    jpg: `javascript.jpg`,
  },
  React: { webp: `React.webp`, jpg: `React.jpg` },
  Web: { webp: `Web.webp`, jpg: `Web.jpg` },
  TypeScript: {
    webp: `TypeScript.webp`,
    jpg: `TypeScript.jpg`,
  },
  "HTML-CSS": { webp: "HTMLCSS.webp", jpg: "HTMLCSS.jpg" },
  NodeJs: { webp: `nodejs.webp`, jpg: `nodejs.jpg` },
  OperatingSystem: { webp: "OS.webp", jpg: "OS.jpg" },
  DataStructure: { webp: "DataStructure.webp", jpg: "DataStructure.jpg" },
  NetWork: { webp: "NetWork.webp", jpg: "NetWork.jpg" },
  Algorithm: { webp: "programmers.webp", jpg: "programmers.jpg" },
};

export default THUMBNAIL;
