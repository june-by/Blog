import { getThumbNail } from "./getThumbnail";
import { S3_PREFIX } from "./variable";

export const getOgImage = (
  url: string | null | undefined,
  category: string
) => {
  if (url === "" || url === "null" || url === "undefined" || !url)
    return S3_PREFIX + getThumbNail(category).jpg;
  else return url;
};
