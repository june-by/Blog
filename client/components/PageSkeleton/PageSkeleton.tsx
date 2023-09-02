import React from "react";
import PostPageSkeleton from "./PostPageSkeleton";
import PostsPageSkeleton from "./PostsPageSkeleton";
import SwitchCase from "components/shared/SwitchCase";

interface Props {
  url: string;
}

const getMainPathFromUrl = (url: string) => {
  if (url.includes("/post/")) return "post";
  else if (url.includes("/series")) return "needed";
  else if (url.includes("/archives")) return "needed";
  else if (url.includes("/about")) return "needed";
  else if (url.includes("/snippets")) return "needed";

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
