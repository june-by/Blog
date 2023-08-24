import React from "react";
import PostPageSkeleton from "./PostPageSkeleton";
import PostsPageSkeleton from "./PostsPageSkeleton";
import Header from "components/Header";
import SwitchCase from "components/shared/SwitchCase";
interface Props {
  nextUrl: string;
}

const getMainPathFromUrl = (url: string) => {
  if (url.includes("/post/")) return "post";
  else if (url.includes("/series")) return "needed";
  else if (url.includes("/archives")) return "needed";
  return "posts";
};

const PageSkeleton = ({ nextUrl }: Props) => {
  const mainPath = getMainPathFromUrl(nextUrl);
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
