import { type Dispatch, type SetStateAction } from "react";
export interface PostFormItemSharedType<T> {
  setState: Dispatch<SetStateAction<T>>;
  stateKey: keyof T;
  value: T[keyof T];
  label?: string;
}
