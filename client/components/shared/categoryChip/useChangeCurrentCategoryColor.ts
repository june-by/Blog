import { useRouter } from "next/router";
import { useEffect } from "react";

interface Params {
  category: string;
  btnRef: React.RefObject<HTMLButtonElement>;
}

const useChangeCurrentCategoryColor = ({ category, btnRef }: Params) => {
  const { query, asPath } = useRouter();
  useEffect(() => {
    if (!btnRef.current) return;
    if (!query.category) return;
    if (isCurrentCategory(query.category as string, category)) btnRef.current.style.background = "#6185e5";
  }, [asPath]);
};

function isCurrentCategory(currentCategory: string, btnCategory: string) {
  if (currentCategory === btnCategory) return true;
  return false;
}

export default useChangeCurrentCategoryColor;
