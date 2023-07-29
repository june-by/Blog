import React from "react";
import PostPageSkeleton from "./PostPageSkeleton";
import PostsPageSkeleton from "./PostsPageSkeleton";

interface Props {
  nextUrl: string;
}

const PageSkeleton = ({ nextUrl }: Props) => {
  if (nextUrl.includes("/post/")) return <PostPageSkeleton />;
  return <PostsPageSkeleton />;
};

export default PageSkeleton;
