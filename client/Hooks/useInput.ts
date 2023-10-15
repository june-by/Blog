import { StateUpdater } from "@Types";
import { type ChangeEvent, useCallback, useState } from "react";

type UseInputType = (
  defaultValue?: string
) => [string, StateUpdater<string>, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput: UseInputType = (defaultValue = "") => {
  const [input, setInput] = useState(defaultValue);
  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  return [input, setInput, onChangeInput];
};

export default useInput;
