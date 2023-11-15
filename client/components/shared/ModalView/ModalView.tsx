import React, { type PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import CloseIcon from "@components/Icon/close";
import classNames from "classnames";
interface Props {
  title: string;
  isClose?: boolean;
  onClose: () => void;
}

const ModalView = ({
  children,
  title,
  onClose,
  isClose,
}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.ModalWrap}>
      <div
        className={classNames(styles.Overlay, {
          [styles.overlayCloseAnimation]: isClose,
        })}
        onClick={onClose}
      />
      <div
        className={classNames(styles.Modal, {
          [styles.modalCloseAnimation]: isClose,
        })}
      >
        <div className={styles.Modal_Header}>
          <h3>{title}</h3>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.Modal_Content}>{children}</div>
      </div>
    </div>
  );
};

export default ModalView;
