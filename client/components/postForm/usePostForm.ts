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

  const verifyNonNullableInFormState = useCallback(
    (params?: { exclude: (keyof typeof formState)[] }) => {
      const { exclude = [] } = params ?? {};
      const formDataKeys = Object.keys(formState) as (keyof typeof formState)[];

      for (const key of formDataKeys) {
        if (exclude.includes(key)) continue;
        if (!formState[key]) return key;
      }

      return false;
    },
    [formState]
  );

  return {
    formItemProps,
    formState,
    setFormState,
    syncFormDataAndState,
    verifyNonNullableInFormState,
  };
};

export default usePostForm;
