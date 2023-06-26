const PRODUCTION_SERVER_URL = "https://api.byjuun.com";
// export const DEV_SERVER_URL = "https://api.byjuun.com";
const DEV_SERVER_URL = "https://local.byjuun.com:8080";

export const ServerURL = process.env.NODE_ENV === "production" ? PRODUCTION_SERVER_URL : DEV_SERVER_URL;
