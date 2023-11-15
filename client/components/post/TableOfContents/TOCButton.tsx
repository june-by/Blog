import React, { useState } from "react";
import styles from "./styles.module.scss";
import TOCModal from "./TOCModal";
import HideByScrollDown from "@components/shared/HideByScrollDown";

const MARGIN_RIGHT_FOR_HIDE = "-50px";

const TOCButton = () => {
  const [openOverlay, setopenOverlay] = useState(false);

  const handleClickButton = () => {
    setopenOverlay(true);
  };

  return (
    <>
      <HideByScrollDown
        className={styles.TOCButton}
        hideDirection="right"
        valueForHide={MARGIN_RIGHT_FOR_HIDE}
        tagName="button"
        position={{ top: "62px", right: "-2px" }}
        onClick={handleClickButton}
      >
        TOC
      </HideByScrollDown>
      <TOCModal open={openOverlay} setOpen={setopenOverlay} />
    </>
  );
};

export default TOCButton;
