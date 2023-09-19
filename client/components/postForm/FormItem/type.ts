import { StateUpdater } from "Types/utils";

export interface PostFormItemSharedType<T> {
  setState: StateUpdater<T>;
  stateKey: keyof T;
  value: T[keyof T];
  label?: string;
}
