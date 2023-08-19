import Modal from "components/shared/Modal";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const DefaultModal = ({ children, closeModal, isOpen }: Props) => {
  return (
    <Modal isOpen={isOpen}>
      <Modal.View>
        <Modal.OverLay closeModal={closeModal} />
        <Modal.Content>{children}</Modal.Content>
      </Modal.View>
    </Modal>
  );
};

export default DefaultModal;
