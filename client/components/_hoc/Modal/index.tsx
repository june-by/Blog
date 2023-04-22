import React, { ReactNode, useCallback } from "react";

import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  closeModal: () => void;
}

const Modal = ({ children, closeModal }: Props) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
