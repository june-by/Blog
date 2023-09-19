import { OnlyKey } from "Types/utils";
import { createContext, useContext, useReducer } from "react";

interface ContextProps {
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
  closeLogin: () => void;
  closeSignUp: () => void;
  openLogin: () => void;
  openSignUp: () => void;
}

interface State {
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
}

interface Action {
  type: OnlyKey<ContextProps, Function>;
}

const HeaderContext = createContext<ContextProps>({
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  closeLogin: () => {},
  closeSignUp: () => {},
  openSignUp: () => {},
  openLogin: () => {},
});

const initialState = {
  isLoginModalOpen: false,
  isSearchModalOpen: false,
  isSignUpModalOpen: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "openLogin":
      return {
        isLoginModalOpen: true,
        isSignUpModalOpen: false,
      };
    case "openSignUp":
      return {
        isLoginModalOpen: false,
        isSignUpModalOpen: true,
      };
    case "closeLogin":
      return { ...state, isLoginModalOpen: false };
    case "closeSignUp":
      return { ...state, isSignUpModalOpen: false };
  }
};

export const HeaderContainer = ({ children }: { children: JSX.Element }) => {
  const [{ isLoginModalOpen, isSignUpModalOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );

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
        closeLogin,
        closeSignUp,
        openSignUp,
        openLogin,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};
