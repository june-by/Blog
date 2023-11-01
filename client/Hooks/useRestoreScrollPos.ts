import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function useRestoreSrollPos() {
  const currentPathname = usePathname();

  useEffect(() => {
    if (!sessionStorage.getItem("scrollPos")) {
      return;
    }
    const { pathname, scrollY } = JSON.parse(
      sessionStorage.getItem("scrollPos") as string
    );

    sessionStorage.removeItem("scrollPos");
    if (document.body.scrollHeight < scrollY) {
      return;
    }

    if (pathname === currentPathname) {
      setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 0);
    }
  }, [currentPathname]);
}
