import { useModalDispatchContext } from "@contexts/modalContex";

const useModals = () => {
  const { open, close, closeWithAnimation } = useModalDispatchContext();

  const openModal: typeof open = (Component, props) => {
    open(Component, props);
  };

  const closeModal: typeof close = (Component) => {
    close(Component);
  };

  const closeModalWithAnimation: typeof close = (Component) => {
    closeWithAnimation(Component);
  };

  return {
    openModal,
    closeModal,
    closeModalWithAnimation,
  };
};

export default useModals;
