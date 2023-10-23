import { StateUpdater } from "@Types/utils";
import { ChangeEventHandler, useCallback, useState } from "react";

const useInput = (
  initialState = ""
): [string, StateUpdater<string>, ChangeEventHandler<HTMLInputElement>] => {
  const [value, setValue] = useState(initialState);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, onChange];
};

export default useInput;
