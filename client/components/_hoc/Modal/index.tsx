import React, { ReactNode, useCallback } from "react";

import styles from "./styles.module.scss";

interface Props {
  children: ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, setOpen }: Props) => {
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
