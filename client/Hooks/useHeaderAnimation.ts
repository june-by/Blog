import { useRouter } from "next/router";
import { useEffect } from "react";

const useHeaderAnimation = (ref: React.RefObject<HTMLDivElement>, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const router = useRouter();
  useEffect(() => {
    if (!ref.current) return;
    if (open) ref.current.style.height = "0px";
    else ref.current.style.height = "50px";
  }, [open]);

  useEffect(() => {
    if (router.route !== "/post/[id]") {
      setOpen(false);
      ref!.current!.style.height = "50px";
    }
  }, [router.route]);
};

export default useHeaderAnimation;
