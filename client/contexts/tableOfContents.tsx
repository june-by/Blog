import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  tableOfContents: HTMLElement[];
  activeId: number | null;
}

interface ContainerProps extends Omit<ContextProps, "activeId"> {
  children: ReactNode;
}

export const TableOfContentsContext = createContext<ContextProps | null>(null);

export const TableofContentsContainer = ({
  tableOfContents,
  children,
}: ContainerProps) => {
  const activeId = useGetTOCActiveId(tableOfContents);

  return (
    <TableOfContentsContext.Provider value={{ tableOfContents, activeId }}>
      {children}
    </TableOfContentsContext.Provider>
  );
};

export const useTableOfContentsContext = () => {
  const contextProps = useContext(TableOfContentsContext);

  if (!contextProps)
    throw Error("TableOfContentsContext is used before initialization");

  return useContext(TableOfContentsContext) as ContextProps;
};

const useGetTOCActiveId = (toc: HTMLElement[]) => {
  const [activeId, setActiveId] = useState<null | number>(null);
  const [headingTops, setHeadingTops] = useState<
    | null
    | {
        id: number;
        top: number;
      }[]
  >(null);

  const updateTocPositions = useCallback(() => {
    if (!toc) {
      return;
    }
    const scrollTop = getScrollTop();
    const headingTops = toc.map((el, id) => {
      if (!el) {
        return {
          id,
          top: 0,
        };
      }
      const top = el.getBoundingClientRect().top + scrollTop;
      return {
        id,
        top,
      };
    });
    setHeadingTops(headingTops);
  }, [toc]);

  useEffect(() => {
    updateTocPositions();
    let prevScrollHeight = document.body.scrollHeight;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    function checkScrollHeight() {
      const scrollHeight = document.body.scrollHeight;
      if (prevScrollHeight !== scrollHeight) {
        updateTocPositions();
      }
      prevScrollHeight = scrollHeight;
      timeoutId = setTimeout(checkScrollHeight, 250);
    }
    timeoutId = setTimeout(checkScrollHeight, 250);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [updateTocPositions]);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (!headingTops) {
      return;
    }
    const currentHeading = [...headingTops].reverse().find((headingTop) => {
      return scrollTop >= headingTop.top - 4;
    });
    if (!currentHeading) {
      setActiveId(null);
      return;
    }

    setActiveId(currentHeading.id);
  }, [headingTops]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  // For post SSR
  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return activeId;
};

function getScrollTop() {
  if (!document.body) {
    return 0;
  }
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
}
