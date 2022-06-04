import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import { useGetAllCateogryLength } from "../../../Hooks/Post";
import useWidthAnimation from "../../../Hooks/useWidthAnimation";
import { Category } from "../../../utils/category";
import MobileAccount from "./MobileAccount";
import styles from "./styles.module.scss";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ open, setOpen }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data, isLoading } = useGetAllCateogryLength();

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onClickMenu = useCallback(
    (category: string) => () => {
      setOpen(false);
      return router.push({
        pathname: "/filter",
        query: { category: category },
      });
    },
    []
  );

  useWidthAnimation(menuRef, open);

  return (
    <div>
      {open && <div className={styles.MobileOverLay} onClick={onClose}></div>}
      <div ref={menuRef} className={styles.MobileMenu}>
        <div className={styles.CloseArea}>
          <button onClick={onClose}>
            <Image src="/goBack.png" width={10} height={13} alt="더보기" />
          </button>
        </div>
        <div className={styles.MenuArea}>
          <MobileAccount />
          {!isLoading && (
            <>
              {Category.map((category) => {
                return (
                  <div key={category} onClick={onClickMenu(category)} className={styles.CategoryItem}>
                    <div className={styles.text}>{category}</div>
                    <div className={styles.count}>{data?.find((v) => v.category === category)?.count || 0}</div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
