import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useGotoPage = () => {
  const { push } = useRouter();
  return useCallback(
    (url: string) => () => {
      push(url);
    },
    [push]
  );
};

export default useGotoPage;
