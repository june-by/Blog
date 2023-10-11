import { useEffect } from "react";

interface Params {
  when?: boolean;
  element: Element | null;
  scrollOptions?: Parameters<Element["scrollIntoView"]>[0];
}

const useScrollIntoElement = ({ when, element, scrollOptions }: Params) => {
  useEffect(() => {
    if (!element) {
      return;
    }

    if (when) {
      element.scrollIntoView(scrollOptions);
    }
  }, [element, scrollOptions, when]);
};

export default useScrollIntoElement;
