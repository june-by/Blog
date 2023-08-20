import React from "react";
import { Concert_One } from "next/font/google";
import useGotoPage from "Hooks/useGotoPage";
import FontAppliedElement from "components/shared/FontAppliedElement";

const ConcertOneFont = Concert_One({
  weight: "400",
  subsets: [],
});

const Logo = () => {
  const gotoPage = useGotoPage();

  return (
    <h1 className={ConcertOneFont.className} onClick={gotoPage("/")}>
      ByJuun.
    </h1>
  );
};

export default Logo;
