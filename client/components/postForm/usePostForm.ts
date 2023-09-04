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

  const verifyAllKeysInFormStateEntered = useCallback(() => {
    const formDataKeys = Object.keys(formState) as (keyof typeof formState)[];

    for (const key of formDataKeys) {
      if (!formState[key]) return key;
    }

    return false;
  }, [formState]);

  return { formItemProps, formState, setFormState, syncFormDataAndState, verifyAllKeysInFormStateEntered };
};

export default usePostForm;
