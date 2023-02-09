import MenuBackIcon from "components/Icon/menuBack";
import useWidthAnimation from "Hooks/useWidthAnimation";
import React, { useContext, useRef } from "react";
import { MobileMenuContext } from "..";
import MobileAccount from "./MobileAccount";
import MobileCategoryList from "./MobileCategoryList";
import styles from "./styles.module.scss";

const Menu = () => {
  const { showMobileMenu, toggleShowMobileMenu } = useContext(MobileMenuContext);
  const menuRef = useRef<HTMLDivElement>(null);

  useWidthAnimation(menuRef, showMobileMenu);

  return (
    <div className={styles.MobileMenuWrapper}>
      {showMobileMenu && <div className={styles.MobileOverLay} onClick={toggleShowMobileMenu}></div>}
      <nav ref={menuRef} className={styles.MobileMenu}>
        <div className={styles.CloseArea}>
          <button onClick={toggleShowMobileMenu}>
            <MenuBackIcon />
          </button>
        </div>
        <div className={styles.MenuArea}>
          <MobileAccount />
          <MobileCategoryList />
        </div>
      </nav>
    </div>
  );
};

export default Menu;
