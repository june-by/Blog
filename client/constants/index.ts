export { default as CACHE_OPTION } from "./cacheOption";
export * from "./category";
export { default as DUMMY } from "./dummy";
export { default as MESSAGE } from "./message";
export { default as PAGE } from "./page";
export { default as QUERY_KEY } from "./queryKey";
export { default as THUMBNAIL } from "./thumbnail";
export { default as REVALIDATE_TAG } from "./revalidateTag";

export const POSTS_PER_PAGE = 20;
export const S3_PREFIX =
  "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/";
export const ServerURL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8080";
export const DEFAULT_THEME = "dark";
