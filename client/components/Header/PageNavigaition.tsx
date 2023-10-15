import { PAGE } from "@constants";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import FontAppliedElement from "components/shared/FontAppliedElement";

const PageNavigaition = () => {
  return (
    <FontAppliedElement className={styles.PageNavigaition}>
      {Object.values(PAGE).map(({ text, url }) => (
        <Link key={text} href={url}>
          {text}
        </Link>
      ))}
    </FontAppliedElement>
  );
};

export default PageNavigaition;
