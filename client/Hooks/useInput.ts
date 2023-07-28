import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from "react";

type useInputType = (
  defaultValue?: string
) => [string, Dispatch<SetStateAction<string>>, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput: useInputType = (defaultValue = "") => {
  const [input, setInput] = useState(defaultValue);
  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  return [input, setInput, onChangeInput];
};

export default useInput;
