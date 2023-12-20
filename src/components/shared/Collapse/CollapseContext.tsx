import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type CollapseStateContextProps = { isCollapseOpen: boolean };
const CollapseStateContext = createContext<CollapseStateContextProps | null>(
  null
);

type CollpaseActionContextProps = { toggleCollapse: () => void };
const CollpaseActionContext = createContext<CollpaseActionContextProps | null>(
  null
);

export const CollapseContextProvider = ({ children }: PropsWithChildren) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const toggleCollapse = useCallback(() => {
    setIsCollapseOpen((prev) => !prev);
  }, []);

  return (
    <CollpaseActionContext.Provider value={{ toggleCollapse }}>
      <CollapseStateContext.Provider value={{ isCollapseOpen }}>
        {children}
      </CollapseStateContext.Provider>
    </CollpaseActionContext.Provider>
  );
};

export const useCollapseStateContext = () => {
  const contextValue = useContext(CollapseStateContext);

  if (!contextValue) {
    throw new Error("CollapseStateContext used before initialized");
  }

  return contextValue;
};

export const useCollapseActionContext = () => {
  const contextValue = useContext(CollpaseActionContext);

  if (!contextValue) {
    throw new Error("CollpaseActionContext used before initialized");
  }

  return contextValue;
};
