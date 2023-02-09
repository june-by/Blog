import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  headerRef: React.RefObject<HTMLDivElement>;
  hide: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

const useHeaderAnimation = ({ headerRef, hide, setHide }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (!headerRef.current) return;
    if (hide) headerRef.current.style.height = "0px";
    else headerRef.current.style.height = "50px";
  }, [hide]);

  useEffect(() => {
    if (router.route !== "/post/[id]") {
      setHide(false);
      headerRef!.current!.style.height = "50px";
    }
  }, [router.route]);
};

export default useHeaderAnimation;
