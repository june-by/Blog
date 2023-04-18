import useToggle from "Hooks/useToggle";
import React, { createContext, useContext } from "react";
interface Props {
  children: JSX.Element;
}

interface ContextProps {
  showMobileMenu: boolean;
  toggleShowMobileMenu: () => void;
}

export const MobileMenuContext = createContext<ContextProps>({ showMobileMenu: false, toggleShowMobileMenu: () => {} });

export const MobileMenuContainer = ({ children }: Props) => {
  const [showMobileMenu, _, toggleShowMobileMenu] = useToggle(false);
  return (
    <MobileMenuContext.Provider value={{ showMobileMenu, toggleShowMobileMenu }}>{children}</MobileMenuContext.Provider>
  );
};

export const useMobileMenuContext = () => {
  return useContext(MobileMenuContext);
};

export default MobileMenuContainer;
