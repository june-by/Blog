import React, { useRef } from "react";
import useHeightAnimation from "../../../Hooks/useHeightAnimation";
import HeaderRight from "../HeaderRight";
import styles from "./styles.module.scss";

interface Props {
  open: boolean;
}

const MobileMenu = ({ open }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useHeightAnimation(menuRef, open);
  return (
    <div ref={menuRef} className={styles.MobileMenu}>
      <HeaderRight />
    </div>
  );
};

export default MobileMenu;
