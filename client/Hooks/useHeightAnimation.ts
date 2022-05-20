import { useEffect } from "react";

const useHeightAnimation = (ref: React.RefObject<HTMLDivElement>, open: boolean) => {
  useEffect(() => {
    if (!ref.current) return;
    if (open) ref.current.style.height = "125px";
    else ref.current.style.height = "0";
  }, [open]);
};

export default useHeightAnimation;
