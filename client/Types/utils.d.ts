import { type Dispatch, type SetStateAction } from "react";

export type StateUpdater<T> = Dispatch<SetStateAction<T>>;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;
