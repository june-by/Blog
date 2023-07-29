import React from "react";
import PostPageSkeleton from "./PostPageSkeleton";

interface Props {
  nextUrl: string;
}

const PageSkeleton = ({ nextUrl }: Props) => {
  if (nextUrl.includes("/post/")) return <PostPageSkeleton />;
  return null;
};

export default PageSkeleton;
