import React, { ReactNode, useCallback } from "react";

import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ children, closeModal, isOpen }: Props) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
