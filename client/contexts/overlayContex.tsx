import {
  createContext,
  useContext,
  type ComponentProps,
  type PropsWithChildren,
  type FunctionComponent,
  useState,
  useMemo,
} from "react";

interface OverlayContext<T extends FunctionComponent<any>> {
  Component: T;
  props: ComponentProps<T>;
  open: (Component: T, props?: ComponentProps<T>) => void;
  close: (Component: T) => void;
}

type OverlayDispatchContextType = Pick<OverlayContext<any>, "close" | "open">;

type OverlayStateContextType = Pick<
  OverlayContext<any>,
  "Component" | "props"
>[];

const OverlayDispatchContext = createContext<OverlayDispatchContextType | null>(
  null
);

const OverlayStateContext = createContext<OverlayStateContextType | null>(null);

export const OverlayProvider = ({ children }: PropsWithChildren) => {
  const [openedOverlays, setOpenedOverlays] = useState<OverlayStateContextType>(
    []
  );

  const open = <T extends FunctionComponent<any>>(
    Component: OverlayContext<T>["Component"],
    props?: OverlayContext<T>["props"]
  ) => {
    setOpenedOverlays((Overlays) => {
      return [...Overlays, { Component, props }];
    });
  };

  const close = <T extends FunctionComponent<any>>(
    Component: OverlayContext<T>["Component"]
  ) => {
    setOpenedOverlays((Overlays) => {
      return Overlays.filter((Overlay) => Overlay.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <OverlayStateContext.Provider value={openedOverlays}>
      <OverlayDispatchContext.Provider value={dispatch}>
        {children}
      </OverlayDispatchContext.Provider>
    </OverlayStateContext.Provider>
  );
};

export const useOverlayDispatchContext = () => {
  const context = useContext(OverlayDispatchContext);
  if (!context)
    throw new Error("OverlayDispatchContext used Before Initialization");
  return context;
};

export const useOverlayStateContext = () => {
  const context = useContext(OverlayStateContext);
  if (!context)
    throw new Error("OverlayStateContext used Before Initialization");
  return context;
};
