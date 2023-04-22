import { useWriteContext } from "context/writeContext";
import { useEffect } from "react";

export default function useSetDefaultThumbNail() {
  const {
    writeSubmitData: { thumbNailUrl, title },
    setThumbNailUrl,
  } = useWriteContext();

  useEffect(() => {
    if (thumbNailUrl) return;
    const targetDefaultThumbNail = findTargetThumbNail(title);
    if (targetDefaultThumbNail) setThumbNailUrl(targetDefaultThumbNail);
  }, [title, thumbNailUrl]);
}

function findTargetThumbNail(title: string): string | null {
  for (const target of DEFAULT_THUMBNAIL_TARGET) {
    if (title.includes(target)) return DEFAULT_THUMBNAIL[target];
  }
  return null;
}

const DEFAULT_THUMBNAIL: Record<string, string> = {
  "Effective TypeScript":
    "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1677770366420_EffectiveTypeScript.jpeg",
  "Deep Dive":
    "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1653566527051_%E1%84%86%E1%85%A9%E1%84%83%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A1%E1%84%87%E1%85%A1%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%90%E1%85%B3%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.png",
};

const DEFAULT_THUMBNAIL_TARGET = Object.keys(DEFAULT_THUMBNAIL);
