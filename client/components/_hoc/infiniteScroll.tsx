import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";

interface Props {
  children: JSX.Element;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<any, unknown>>;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  skeleton: JSX.Element;
}

const InfiniteScroll = ({ children, fetchNextPage, hasNextPage, isLoading, skeleton }: Props) => {
  const { ref, inView } = useInView();

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