"use client";

import { useOverlayStateContext } from "@contexts/overlayContex";
import { useOverlay } from "@hooks";
import React from "react";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("./LoginModal"), {
  ssr: false,
});

const SignUpModal = dynamic(() => import("./SignUpModal"), {
  ssr: false,
});

const SeriesFormModal = dynamic(() => import("./SeriesFormModal"), {
  ssr: false,
});

const MobileMenuModal = dynamic(() => import("@components/Header/MobileMenu"), {
  ssr: false,
});

export const OVERLAYS = {
  LOGIN_MODAL: LoginModal,
  SIGNUP_MODAL: SignUpModal,
  SERIES_FORM_MODAL: SeriesFormModal,
  MOBILE_MENU: MobileMenuModal,
};

const Modals = () => {
  const openedModals = useOverlayStateContext();
  const { closeOverlay } = useOverlay();
  return (
    <>
      {openedModals.map(({ Component, props }, idx) => {
        const onClose = () => {
          closeOverlay(Component);
        };

        return <Component {...props} key={`${idx}Modal`} onClose={onClose} />;
      })}
    </>
  );
};

export default Modals;
