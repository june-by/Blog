import { useOverlayDispatchContext } from "@contexts/overlayContex";

const useOverlay = () => {
  const { open, close } = useOverlayDispatchContext();

  const openOverlay: typeof open = (Component, props) => {
    open(Component, props);
  };

  const closeOverlay: typeof close = (Component) => {
    close(Component);
  };

  return {
    openOverlay,
    closeOverlay,
  };
};

export default useOverlay;
