import { useEffect } from "react";

const useAddClassName = (tagName: string, className: string) => {
  useEffect(() => {
    const $tags = document.getElementsByTagName(tagName);
    for (const tag of $tags as any) {
      tag.className += className;
    }
  }, []);
};

export default useAddClassName;
