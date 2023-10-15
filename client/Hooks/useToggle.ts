import { StateUpdater } from "@Types";
import React, { useCallback, useState } from "react";

type UseToggleReturnType = [boolean, StateUpdater<boolean>, () => void];

const useToggle = (initialState = false): UseToggleReturnType => {
  const [state, setState] = useState<boolean>(initialState);
  const onChange = useCallback(() => {
    setState((prev) => !prev);
  }, []);
  return [state, setState, onChange];
};

export default useToggle;
