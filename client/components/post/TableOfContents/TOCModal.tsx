import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Table from "./Table";
import CloseIcon from "components/Icon/close";
import { StateUpdater } from "Types/utils";

interface Props {
  open: boolean;
  setOpen: StateUpdater<boolean>;
}

const MARGIN_RIGHT_FOR_SHOW = "0px";

const TOCModal = ({ open, setOpen }: Props) => {
  const tocModalRef = useRef<HTMLDivElement | null>(null);

  const handleClickCloseButton = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!tocModalRef.current) {
      return;
    }

    if (open) {
      tocModalRef.current.style.marginRight = MARGIN_RIGHT_FOR_SHOW;
    } else {
      const modalFitContentWidth = tocModalRef.current.offsetWidth;
      const modalMaxWidth = (window.innerWidth / 4) * 3;
      tocModalRef.current.style.marginRight = `-${Math.min(
        modalMaxWidth,
        modalFitContentWidth
      )}px`;
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
