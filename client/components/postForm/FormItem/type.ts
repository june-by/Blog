import { StateUpdater } from "@Types";

export interface PostFormItemSharedType<T> {
  setState: StateUpdater<T>;
  stateKey: keyof T;
  value: T[keyof T];
  label?: string;
}
