import { useModalStateContext } from "@contexts/modalContex";
import { useModals } from "@hooks";
import React from "react";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("./LoginModal"), {
  ssr: false,
});

const SignUpModal = dynamic(() => import("./SignUpModal"), {
  ssr: false,
});

export const MODALS = {
  LOGIN: LoginModal,
  SIGNUP: SignUpModal,
};

const Modals = () => {
  const openedModals = useModalStateContext();
  const { closeModal } = useModals();
  return (
    <>
      {openedModals.map(({ Component, props }, idx) => {
        const onClose = () => {
          closeModal(Component);
        };

        return <Component {...props} key={`${idx}Modal`} onClose={onClose} />;
      })}
    </>
  );
};

export default Modals;
