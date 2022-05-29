import { getPostThumbNail } from "./getPostThumnail";

export const getOgImage = (url: string | null | undefined, category: string) => {
  if (url === "" || url === "null" || url === "undefined" || !url) return getPostThumbNail(category);
  else return url;
};
