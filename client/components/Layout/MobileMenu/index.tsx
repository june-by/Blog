import Image from "next/image";
import React, { useCallback, useRef } from "react";
import useWidthAnimation from "../../../Hooks/useWidthAnimation";
import MobileAccount from "./MobileAccount";
import MobileCategoryList from "./MobileCategoryList";
import styles from "./styles.module.scss";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useWidthAnimation(menuRef, open);

  return (
    <div className={styles.MobileMenuWrapper}>
      {open && <div className={styles.MobileOverLay} onClick={onClose}></div>}
      <div ref={menuRef} className={styles.MobileMenu}>
        <div className={styles.CloseArea}>
          <button onClick={onClose}>
            <Image src="/goBack.png" width={10} height={13} alt="더보기" />
          </button>
        </div>
        <div className={styles.MenuArea}>
          <MobileAccount />
          <MobileCategoryList />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
