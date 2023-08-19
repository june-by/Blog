import { createContext, useContext, useReducer } from "react";

interface ContextProps {
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
  isSearchModalOpen: boolean;
  closeSearch: () => void;
  closeLogin: () => void;
  closeSignUp: () => void;
  openLogin: () => void;
  openSignUp: () => void;
  openSearch: () => void;
}

interface State {
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
  isSearchModalOpen: boolean;
}
interface Action {
  type:
    | "openSearch"
    | "openLogin"
    | "openSignUp"
    | "closeSearch"
    | "closeLogin"
    | "closeSignUp";
}

const HeaderContext = createContext<ContextProps>({
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  isSearchModalOpen: false,
  closeSearch: () => {},
  closeLogin: () => {},
  closeSignUp: () => {},
  openSignUp: () => {},
  openLogin: () => {},
  openSearch: () => {},
});

const initialState = {
  isLoginModalOpen: false,
  isSearchModalOpen: false,
  isSignUpModalOpen: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "openSearch":
      return {
        isLoginModalOpen: false,
        isSearchModalOpen: true,
        isSignUpModalOpen: false,
      };
    case "openLogin":
      return {
        isLoginModalOpen: true,
        isSearchModalOpen: false,
        isSignUpModalOpen: false,
      };
    case "openSignUp":
      return {
        isLoginModalOpen: false,
        isSearchModalOpen: false,
        isSignUpModalOpen: true,
      };
    case "closeSearch":
      return { ...state, isSearchModalOpen: false };
    case "closeLogin":
      return { ...state, isLoginModalOpen: false };
    case "closeSignUp":
      return { ...state, isSignUpModalOpen: false };
  }
};

export const HeaderContainer = ({ children }: { children: JSX.Element }) => {
  const [{ isLoginModalOpen, isSearchModalOpen, isSignUpModalOpen }, dispatch] =
    useReducer(reducer, initialState);

  const openSearch = () => {
    dispatch({ type: "openSearch" });
  };

  const closeSearch = () => {
    dispatch({ type: "closeSearch" });
  };

  const openLogin = () => {
    dispatch({ type: "openLogin" });
  };

  const closeLogin = () => {
    dispatch({ type: "closeLogin" });
  };

  const openSignUp = () => {
    dispatch({ type: "openSignUp" });
  };

  const closeSignUp = () => {
    dispatch({ type: "closeSignUp" });
  };

  return (
    <HeaderContext.Provider
      value={{
        isLoginModalOpen,
        isSignUpModalOpen,
        isSearchModalOpen,
        closeSearch,
        closeLogin,
        closeSignUp,
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
