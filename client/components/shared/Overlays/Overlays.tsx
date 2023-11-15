"use client";

import { useOverlayStateContext } from "@contexts/overlayContex";
import { useOverlay } from "@hooks";
import React from "react";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("./AuthModal"), {
  ssr: false,
});

const SeriesFormModal = dynamic(() => import("./SeriesFormModal"), {
  ssr: false,
});

const MobileMenuModal = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

export const OVERLAYS = {
  AUTH_MODAL: AuthModal,
  SERIES_FORM_MODAL: SeriesFormModal,
  MOBILE_MENU: MobileMenuModal,
};

const Overlays = () => {
  const openedOverlays = useOverlayStateContext();
  const { closeOverlay } = useOverlay();
  return (
    <>
      {openedOverlays.map(({ Component, props }, idx) => {
        const onClose = () => {
          closeOverlay(Component);
        };

        const onExit = (time: number) => {
          setTimeout(() => {
            onClose();
          }, time);
        };

        return (
          <Component
            {...props}
            key={`${idx}Modal`}
            onClose={onClose}
            onExit={onExit}
          />
        );
      })}
    </>
  );
};

export default Overlays;
