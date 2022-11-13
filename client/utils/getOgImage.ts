import { getThumbNail } from "./getThumbnail";

export const getOgImage = (url: string | null | undefined, category: string) => {
  if (url === "" || url === "null" || url === "undefined" || !url) return getThumbNail(category);
  else return url;
};
