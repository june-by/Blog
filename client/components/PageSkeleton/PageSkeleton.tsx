import React from "react";
import PostPageSkeleton from "./PostPageSkeleton";
import PostsPageSkeleton from "./PostsPageSkeleton";
import SwitchCase from "@components/shared/SwitchCase";

interface Props {
  url: string;
}

const MAIN_PATH_MAPPER = {
  "/post/": "post",
  "/snippets/write": "needed",
  "/snippets/": "post",
  "/series": "needed",
  "/archives": "needed",
  "/snippets": "needed",
  "/about": "needed",
  "/write": "needed",
};

const getMainPathFromUrl = (url: string) => {
  for (const [targetURL, mainPath] of Object.entries(MAIN_PATH_MAPPER)) {
    if (url.includes(targetURL)) {
      return mainPath;
    }
  }
  return "posts";
};

const PageSkeleton = ({ url }: Props) => {
  const mainPath = getMainPathFromUrl(url);
  return (
    <>
      <SwitchCase
        value={mainPath}
        caseBy={{
          post: <PostPageSkeleton />,
          posts: <PostsPageSkeleton />,
          needed: null,
        }}
      />
    </>
  );
};

export default PageSkeleton;
