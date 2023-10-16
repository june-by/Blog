import { useMouted } from "@hooks";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const RootPortal = ({ isOpen, children }: Props) => {
  const mounted = useMouted();

  const portalElement =
    typeof window !== "undefined" && document.querySelector("#portal");

  if (!mounted || !portalElement || !isOpen) {
    return null;
  }

  return createPortal(children, portalElement);
};

export default RootPortal;
