import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ContextProps {
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
  isSearchModalOpen: boolean;
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsSearchModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsSignUpModalOpen: Dispatch<SetStateAction<boolean>>;
  openLogin: () => void;
  openSignUp: () => void;
  openSearch: () => void;
}

const HeaderContext = createContext<ContextProps>({
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  isSearchModalOpen: false,
  setIsLoginModalOpen: () => {},
  setIsSearchModalOpen: () => {},
  setIsSignUpModalOpen: () => {},
  openSignUp: () => {},
  openLogin: () => {},
  openSearch: () => {},
});

export const HeaderContainer = ({ children }: { children: JSX.Element }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  const openSignUp = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
    setIsSearchModalOpen(false);
  };
  const openLogin = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
    setIsSearchModalOpen(false);
  };
  const openSearch = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(false);
    setIsSearchModalOpen(true);
  };

  return (
    <HeaderContext.Provider
      value={{
        isLoginModalOpen,
        isSignUpModalOpen,
        isSearchModalOpen,
        setIsLoginModalOpen,
        setIsSignUpModalOpen,
        setIsSearchModalOpen,
        openSignUp,
        openLogin,
        openSearch,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};
