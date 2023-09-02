export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;
