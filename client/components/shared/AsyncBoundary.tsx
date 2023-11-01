import React, { ComponentProps, PropsWithChildren, useCallback } from "react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import SSRSafeSuspense from "./SSRSafeSuspense";

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

type Props = {
  suspenseFallback: ComponentProps<typeof SSRSafeSuspense>["fallback"];
  errorFallback: ErrorBoundaryProps["errorFallback"];
  //   keys?: Array<unknown>;
};

function AsyncBoundary({
  suspenseFallback,
  errorFallback,
  children,
}: //   keys,
PropsWithChildren<Props>) {
  const { reset } = useQueryErrorResetBoundary();
  const resetHandler = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ErrorBoundary resetQuery={resetHandler} {...{ errorFallback }}>
      <SSRSafeSuspense fallback={suspenseFallback}>{children}</SSRSafeSuspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
