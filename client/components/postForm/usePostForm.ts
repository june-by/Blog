import { useCallback, useState } from "react";
import createFormItemProps from "./FormItem/createFormItemProps";

const usePostForm = <T extends Record<string, any>>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const formItemProps = createFormItemProps({
    state: formState,
    setState: setFormState,
  });

  const syncFormDataAndState = useCallback((data: T) => {
    setFormState(data);
  }, []);

  return { formItemProps, formState, setFormState, syncFormDataAndState };
};

export default usePostForm;
