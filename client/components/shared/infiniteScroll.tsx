import React, { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";
import LoadingOrNot from "./LoadingOrNot";

interface Props {
  children: ReactNode;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
  hasNextPage?: boolean;
  isLoading: boolean;
  skeleton: JSX.Element;
}

const InfiniteScroll = ({
  children,
  fetchNextPage,
  hasNextPage,
  isLoading,
  skeleton,
}: Props) => {
  const { ref, inView } = useInView({ rootMargin: "150px" });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      {children}
      <LoadingOrNot isLoading={isLoading} onLoading={skeleton}>
        <div ref={ref} />
      </LoadingOrNot>
    </>
  );
};

export default InfiniteScroll;
