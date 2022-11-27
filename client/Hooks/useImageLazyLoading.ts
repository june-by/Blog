import { useEffect } from "react";

export function useImageLazyLoading(
  imgRef: React.MutableRefObject<HTMLImageElement | null>
) {
  useEffect(() => {
    if (!imgRef.current) return;
    const observeThumbNail = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          const previousSibling = target.previousSibling as HTMLSourceElement;
          target.src = target.dataset.src as string;
          previousSibling.srcset = previousSibling.dataset.srcset as string;
          observer.unobserve(target);
        }
      });
    };
    const observer = new IntersectionObserver(observeThumbNail, {});
    observer.observe(imgRef.current);
  }, []);
}
