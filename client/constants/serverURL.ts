const PRODUCTION_SERVER_URL = "https://api.byjuun.com";
export const DEV_SERVER_URL = "https://api.byjuun.com";
// const DEV_SERVER_URL = "https://local.byjuun.com:8080";

export const ServerURL = getServerURL(process.env.NODE_ENV);

export const TEST_SERVER_URL = "http://localhost:3000";

function getServerURL(env?: string) {
  if (env === "production") return PRODUCTION_SERVER_URL;
  else return DEV_SERVER_URL;
}
