import { useModalDispatchContext } from "@contexts/modalContex";

const useModals = () => {
  const { open, close } = useModalDispatchContext();

  const openModal: typeof open = (Component, props) => {
    open(Component, props);
  };

  const closeModal: typeof close = (Component) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
};

export default useModals;
