import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Table from "./Table";
import CloseIcon from "components/Icon/close";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TOCModal = ({ open, setOpen }: Props) => {
  const tocModalRef = useRef<HTMLDivElement | null>(null);

  const handleClickCloseButton = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!tocModalRef.current) return;
    if (open) {
      tocModalRef.current.style.marginRight = "0px";
    } else {
      tocModalRef.current.style.marginRight = "-75vw";
    }
  }, [open]);

  return (
    <div ref={tocModalRef} className={styles.TOCModal}>
      <button
        className={styles.TOCModalCloseButton}
        onClick={handleClickCloseButton}
      >
        <CloseIcon />
      </button>

      <Table />
    </div>
  );
};

export default TOCModal;
