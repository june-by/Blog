import React, { type PropsWithChildren, useCallback } from "react";
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import LoadingOrNot from "./LoadingOrNot";
import ImpressionArea from "./ImpressionArea";

interface Props extends PropsWithChildren {
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
  const fetchNextData = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      {children}
      <LoadingOrNot isLoading={isLoading} onLoading={skeleton}>
        <ImpressionArea
          onImpression={fetchNextData}
          options={{ rootMargin: "150px" }}
        />
      </LoadingOrNot>
    </>
  );
};

export default InfiniteScroll;
