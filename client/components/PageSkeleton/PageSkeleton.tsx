import React from "react";
import PostPageSkeleton from "./PostPageSkeleton";
import PostsPageSkeleton from "./PostsPageSkeleton";
import Header from "components/Header";
import SwitchCase from "components/_hoc/SwitchCase";
interface Props {
  nextUrl: string;
}

const getMainPathFromUrl = (url: string) => {
  if (url.includes("/post/")) return "post";
  return "posts";
};

const PageSkeleton = ({ nextUrl }: Props) => {
  const mainPath = getMainPathFromUrl(nextUrl);
  return (
    <>
      <Header />
      <SwitchCase
        value={mainPath}
        caseBy={{
          post: <PostPageSkeleton />,
          posts: <PostsPageSkeleton />,
        }}
      />
    </>
  );
};

export default PageSkeleton;
