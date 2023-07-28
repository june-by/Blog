import React, { useCallback, useState } from "react";

type ReturnType = [boolean, React.Dispatch<React.SetStateAction<boolean>>, () => void];

const useToggle = (initialState = false): ReturnType => {
  const [state, setState] = useState<boolean>(initialState);
  const onChange = useCallback(() => {
    setState((prev) => !prev);
  }, []);
  return [state, setState, onChange];
};

export default useToggle;
