import PAGE from "constants/page";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const PageNavigaition = () => {
  return (
    <div className={styles.PageNavigaition}>
      {Object.values(PAGE).map(({ text, url }) => (
        <Link key={text} href={url}>
          {text}
        </Link>
      ))}
    </div>
  );
};

export default PageNavigaition;
