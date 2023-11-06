import React from "react";
import { Concert_One } from "next/font/google";
import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "classnames";
const ConcertOneFont = Concert_One({
  weight: "400",
  subsets: [],
});

const Logo = () => {
  return (
    <Link
      className={classNames(ConcertOneFont.className, styles.Logo)}
      href="/"
    >
      ByJuun.
    </Link>
  );
};

export default Logo;
