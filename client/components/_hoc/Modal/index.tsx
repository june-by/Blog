import React, { ReactNode } from "react";

import styles from "./styles.module.scss";
import RootPortal from "../RootPortal";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ children, closeModal, isOpen }: Props) => {
  return (
    <RootPortal isOpen={isOpen}>
      <div className={styles.Modal}>
        <div className={styles.overlay} onClick={closeModal}></div>
        <div className={styles.content}>{children}</div>
      </div>
    </RootPortal>
  );
};

export default Modal;
