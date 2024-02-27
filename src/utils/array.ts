export const groupByStringKey = <T>({ array, key }: { array: T[]; key: keyof T }) => {
  const keys = Array.from(new Set(array.map((v) => v[key]))).sort() as string[];

  return keys.reduce((acc, cur) => ({ ...acc, [cur]: array.filter((v) => v[key] === cur) }), {}) as Record<string, T[]>;
};
