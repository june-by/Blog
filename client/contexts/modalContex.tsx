import { OnlyKey } from "@Types/utils";
import {
  createContext,
  useContext,
  type ComponentProps,
  type PropsWithChildren,
  type FunctionComponent,
  useState,
  useMemo,
} from "react";

interface ModalContext<T extends FunctionComponent<any>> {
  Component: T;
  props: ComponentProps<T>;
  open: (Component: T, props: ComponentProps<T>) => void;
  close: (Component: T) => void;
  closeWithAnimation: (Component: T, duration?: number) => void;
}

type ModalDispatchContextType = Pick<
  ModalContext<any>,
  "close" | "closeWithAnimation" | "open"
>;

type ModalStateContextType = Pick<ModalContext<any>, "Component" | "props">[];

const ModalDispatchContext = createContext<ModalDispatchContextType | null>(
  null
);

const ModalStateContext = createContext<ModalStateContextType | null>(null);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [openedModals, setOpenedModals] = useState<ModalStateContextType>([]);

  const open = <T extends FunctionComponent<any>>(
    Component: ModalContext<T>["Component"],
    props: ModalContext<T>["props"]
  ) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = <T extends FunctionComponent<any>>(
    Component: ModalContext<T>["Component"]
  ) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => modal.Component !== Component);
    });
  };

  const closeWithAnimation = <T extends FunctionComponent<any>>(
    Component: ModalContext<T>["Component"],
    duration = 500
  ) => {
    setTimeout(() => {
      setOpenedModals((modals) => {
        return modals.filter((modal) => modal.Component !== Component);
      });
    }, duration);
  };

  const dispatch = useMemo(() => ({ open, close, closeWithAnimation }), []);

  return (
    <ModalStateContext.Provider value={openedModals}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export const useModalDispatchContext = () => {
  const context = useContext(ModalDispatchContext);
  if (!context)
    throw new Error("ModalDispatchContext used Before Initialization");
  return context;
};

export const useModalStateContext = () => {
  const context = useContext(ModalStateContext);
  if (!context) throw new Error("ModalStateContext used Before Initialization");
  return context;
};
