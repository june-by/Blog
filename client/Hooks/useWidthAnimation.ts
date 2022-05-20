import { useEffect } from "react";

const useWidthAnimation = (ref: React.RefObject<HTMLDivElement>, open: boolean) => {
  useEffect(() => {
    if (!ref.current) return;
    if (open) ref.current.style.width = "200px";
    else ref.current.style.width = "0";
  }, [open]);
};

export default useWidthAnimation;
