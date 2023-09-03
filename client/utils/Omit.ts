function Omit<T extends Record<string, any>>(obj: T, ...props: (keyof T)[]) {
  const result = { ...obj };
  props.forEach(function (prop) {
    delete result[prop];
  });
  return result;
}

export default Omit;
