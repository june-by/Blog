import router from "next/router";
import { useEffect } from "react";

interface Params {
  category: string;
  btnRef: React.RefObject<HTMLButtonElement>;
}

const useChangeColor = ({ category, btnRef }: Params) => {
  useEffect(() => {
    if (router.query?.category) {
      if (router.query.category === category && btnRef.current) btnRef.current.style.background = "#6185e5";
    }
  }, [router.asPath]);
};

export default useChangeColor;
