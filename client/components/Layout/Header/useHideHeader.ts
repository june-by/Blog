// 스크롤 방향에 따라, 아래로 스크롤할 경우, hide : true, 위로 스크롤 할 경우, hide : false,

import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

const useHideHeader = (setHide: React.Dispatch<React.SetStateAction<boolean>>) => {
  const documentRef = useRef(typeof window !== "object" ? null : document);
  const [pageY, setPageY] = useState(0);
  const router = useRouter();

  const throttle = (callback: () => void, waitTime: number) => {
    let timerId: null | NodeJS.Timeout = null;
    return (e: any) => {
      if (timerId) return;
      timerId = setTimeout(() => {
        callback.call(this);
        timerId = null;
      }, waitTime);
    };
  };

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  }, [pageY]);

  const throttleScroll = throttle(handleScroll, 100);

  useEffect(() => {
    if (documentRef !== null && documentRef.current && router.route === "/post/[id]") {
      documentRef.current.addEventListener("scroll", throttleScroll);
      return () => documentRef?.current?.removeEventListener("scroll", throttleScroll);
    }
  }, [pageY, router.route]);
};

export default useHideHeader;
