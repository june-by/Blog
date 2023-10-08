export default function extractFromCookie(
  cookie: string | undefined,
  key: string
) {
  if (!cookie) {
    return null;
  }
  const cookieArray = cookie.split(";");
  const keyValue = cookieArray.find((item) => item.trim().startsWith(key));
  if (!keyValue) {
    return null;
  }
  const value = keyValue.split("=")[1];
  return value;
}
