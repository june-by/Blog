export default function isNull<T>(param: T) {
  return param === "null" || !param;
}
