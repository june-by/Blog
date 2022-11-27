import React, {
  ReactChild,
  ReactChildren,
  useCallback,
  useContext,
} from "react";
import { ThemeContext } from "utils/ThemeContext";

import styles from "./styles.module.scss";

interface Props {
  children: ReactChild | ReactChildren;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, setOpen }: Props) => {
  const { theme } = useContext(ThemeContext);
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={styles.Modal}>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={`${styles.content} ${styles[theme]}`}>{children}</div>
    </div>
  );
};

export default Modal;
