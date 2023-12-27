"use client";

import React from "react";
import { useMounted } from "@/hooks";

interface Props {
  children: JSX.Element;
  fallback?: JSX.Element | null;
}

const RenderAfterMounted = ({ children, fallback = null }: Props) => {
  const isMounted = useMounted();

  if (!isMounted) {
    return fallback;
  }

  return children;
};

export default RenderAfterMounted;
