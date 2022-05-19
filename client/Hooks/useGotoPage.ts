import { useRouter } from "next/router";
import { useCallback } from "react";

const useGotoPage = () => {
  const { push } = useRouter();
  const gotoPage = useCallback(
    (url: string) => () => {
      push(url);
    },
    []
  );
  return gotoPage;
};

export default useGotoPage;
