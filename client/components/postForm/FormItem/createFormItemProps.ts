import { PostFormItemSharedType } from "./type";

interface Params<T> extends Pick<PostFormItemSharedType<T>, "setState"> {
  state: T;
}

const createFormItemProps = <T extends Record<string, any>>({
  state,
  setState,
}: Params<T>): ((
  stateKey: PostFormItemSharedType<T>["stateKey"]
) => PostFormItemSharedType<T>) => {
  return function (stateKey) {
    return {
      stateKey,
      value: state[stateKey],
      setState,
    };
  };
};

export default createFormItemProps;
