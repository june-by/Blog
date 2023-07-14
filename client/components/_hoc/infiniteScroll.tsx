import React, { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";

interface Props {
  children: ReactNode;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<any, unknown>>;
  hasNextPage?: boolean;
  isLoading: boolean;
  skeleton: ReactNode;
}

const InfiniteScroll = ({ children, fetchNextPage, hasNextPage, isLoading, skeleton }: Props) => {
  const { ref, inView } = useInView({ rootMargin: "150px" });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      {children}
      {isLoading ? skeleton : <div ref={ref}></div>}
    </>
  );
};

export default InfiniteScroll;
