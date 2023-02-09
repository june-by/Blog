import useToggle from "Hooks/useToggle";
import React, { createContext } from "react";
import Menu from "./menu";
import ToggleButton from "./toggleButton";

interface Props {
  children: JSX.Element;
}

interface ContextProps {
  showMobileMenu: boolean;
  toggleShowMobileMenu: () => void;
}

export const MobileMenuContext = createContext<ContextProps>({ showMobileMenu: false, toggleShowMobileMenu: () => {} });

const MobileMenuContainer = ({ children }: Props) => {
  const [showMobileMenu, _, toggleShowMobileMenu] = useToggle(false);
  return (
    <MobileMenuContext.Provider value={{ showMobileMenu, toggleShowMobileMenu }}>{children}</MobileMenuContext.Provider>
  );
};

MobileMenuContainer.ToggleButton = ToggleButton;
MobileMenuContainer.Menu = Menu;

export default MobileMenuContainer;
