import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import CloseIcon from "@components/Icon/close";

interface Props {
  onClose: () => void;
  src: string;
  width: number;
  height: number;
}

const ImageModal = ({ onClose, src, width = 100, height = 100 }: Props) => {
  return (
    <div className={styles.ModalWrap}>
      <div className={styles.Overlay} onClick={onClose} />
      <div className={styles.Content}>
        {/* <button onClick={onClose}>
          <CloseIcon />
        </button> */}
        <Image src={src} alt="" width={width} height={height} />
      </div>
    </div>
  );
};

export default ImageModal;
