import React, { forwardRef, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  Icon: JSX.Element;
}

const IconBtn = forwardRef(({ Icon, ...props }: Props) => {
  return (
    <button className={styles.btn} {...props}>
      {Icon}
    </button>
  );
});

export default React.memo(IconBtn);
