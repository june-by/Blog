import React from "react";
import styles from "./_iconStyles.module.scss";

const LogoutIcon = () => {
  return (
    <svg width="23" height="23" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 30H18C18.5303 29.9995 19.0387 29.7886 19.4136 29.4136C19.7886 29.0387 19.9995 28.5303 20 28V25H18V28H6V4H18V7H20V4C19.9995 3.46973 19.7886 2.96133 19.4136 2.58637C19.0387 2.21141 18.5303 2.00053 18 2H6C5.46973 2.00053 4.96133 2.21141 4.58637 2.58637C4.21141 2.96133 4.00053 3.46973 4 4V28C4.00053 28.5303 4.21141 29.0387 4.58637 29.4136C4.96133 29.7886 5.46973 29.9995 6 30Z"
        className={styles.path}
      />
      <path
        d="M20.586 20.586L24.172 17H10V15H24.172L20.586 11.414L22 10L28 16L22 22L20.586 20.586Z"
        className={styles.path}
      />
    </svg>
  );
};

export default LogoutIcon;
