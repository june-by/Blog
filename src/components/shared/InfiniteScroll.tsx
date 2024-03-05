import React, { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  children: JSX.Element;
  hasMore: boolean;
  fetchNext: (() => Promise<void>) | (() => void);
  loadingIndicator?: JSX.Element | null;
}

const InfiniteScroll = ({
  children,
  hasMore,
  fetchNext,
  loadingIndicator = null,
}: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const IntersectionObserverCallback: IntersectionObserverCallback =
    useCallback(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          if (!hasMore) {
            observer.disconnect();
            return;
          }

          setIsLoading(true);

          new Promise(fetchNext).finally(() => setIsLoading(false));
        });
      },
      [fetchNext, hasMore]
    );

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }
    observer.current = new IntersectionObserver(IntersectionObserverCallback);
    observer.current.observe(elementRef.current);

    return () => {
      if (!observer.current) return;
      observer.current.disconnect();
    };
  }, [IntersectionObserverCallback]);

  return (
    <>
      {children}
      {isLoading && <>{loadingIndicator}</>}
      <div ref={elementRef} />
    </>
  );
};

export default InfiniteScroll;
