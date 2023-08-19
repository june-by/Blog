import React, { ReactNode } from "react";

import styles from "./styles.module.scss";
import RootPortal from "../RootPortal";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const ModalOverLay = ({ closeModal }: Pick<ModalProps, "closeModal">) => {
  return <div className={styles.overlay} onClick={closeModal} />;
};

const ModalContent = ({ children }: Pick<ModalProps, "children">) => {
  return <div className={styles.content}>{children}</div>;
};

const ModalView = ({ children }: Pick<ModalProps, "children">) => {
  return <div className={styles.Modal}>{children}</div>;
};

const Modal = Object.assign(
  ({ children, isOpen }: Omit<ModalProps, "closeModal">) => {
    return <RootPortal isOpen={isOpen}>{children}</RootPortal>;
  },
  {
    OverLay: ModalOverLay,
    Content: ModalContent,
    View: ModalView,
  }
);

export default Modal;
