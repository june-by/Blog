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
    <FontAppliedElement tagName="h1" onClick={gotoPage("/")}>
      ByJuun.
    </FontAppliedElement>
  );
};

export default Logo;
