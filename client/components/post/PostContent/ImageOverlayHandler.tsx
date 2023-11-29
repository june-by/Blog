"use client";
import { OVERLAYS } from "@components/shared/Overlays/Overlays";
import useOverlay from "@hooks/useOverlay";
import React, { PropsWithChildren, useCallback, useEffect } from "react";

const ImageOverlayHandler = ({ children }: PropsWithChildren) => {
  const { openOverlay } = useOverlay();

  const openImageModal = useCallback(
    (image: HTMLImageElement) => () => {
      const { src, width, height } = image;
      openOverlay(OVERLAYS.IMAGE_MODAL, { src, width, height });
    },
    [openOverlay]
  );

  useEffect(() => {
    const images = Array.from(
      document.querySelector(".PostContent")?.getElementsByTagName("img") || []
    );

    images.forEach((image) => {
      image.addEventListener("click", openImageModal(image));
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", openImageModal(image));
      });
    };
  }, [openImageModal]);

  return <>{children}</>;
};

export default ImageOverlayHandler;
