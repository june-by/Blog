import React, { ReactNode, useCallback } from "react";

import styles from "./styles.module.scss";
import useMouted from "Hooks/useMounted";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ children, closeModal, isOpen }: Props) => {
  const mounted = useMouted();

  const portalElement = typeof window !== "undefined" && document.querySelector("#portal");

  if (!mounted || !portalElement || !isOpen) return null;

  return createPortal(
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.content}>{children}</div>
    </div>,
    portalElement
  );
};

export default Modal;
