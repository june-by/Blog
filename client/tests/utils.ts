import { FuncsType, PipeParams } from "./type";

export const pipe =
  <T>(...funcs: FuncsType<T>[]) =>
  ({ data, feature }: PipeParams<T>) =>
    funcs.reduce((data, func) => func(data), { data, feature });
