import { type Dispatch, type SetStateAction } from "react";

export type StateUpdater<T> = Dispatch<SetStateAction<T>>;

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type OnlyKey<T, OnlyType> = {
  [K in keyof T]: T[K] extends OnlyType ? K : never;
}[keyof T];

export type PickOnly<T, OnlyType> = Pick<T, OnlyKey<T, OnlyType>>;
