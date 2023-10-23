import { useModalStateContext } from "@contexts/modalContex";
import { useModals } from "@hooks";
import React from "react";
import { LoginModal } from "./LoginModal";
import { SignUpModal } from "./SignUpModal";

export const MODALS = {
  LOGIN: LoginModal,
  SIGNUP: SignUpModal,
};

const Modals = () => {
  const openedModals = useModalStateContext();
  const { closeModal, closeModalWithAnimation } = useModals();
  return (
    <>
      {openedModals.map(({ Component, props }, idx) => {
        const onClose = () => {
          closeModal(Component);
        };

        const onCloseWithAnimation = () => {
          closeModalWithAnimation(Component);
        };

        return (
          <Component
            {...props}
            key={`${idx}Modal`}
            onClose={onClose}
            onCloseWithAnimation={onCloseWithAnimation}
          />
        );
      })}
    </>
  );
};

export default Modals;
