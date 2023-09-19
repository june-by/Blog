import React, { memo, type HTMLAttributes, type ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  Icon: ReactNode;
}

const IconButton = ({ Icon, ...props }: Props) => {
  return (
    <button className={styles.btn} {...props}>
      {Icon}
    </button>
  );
};

export default memo(IconButton);
