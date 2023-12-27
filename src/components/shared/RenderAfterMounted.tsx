"use client";

import React, { useEffect, useState } from "react";

interface Props {
  children: JSX.Element;
  fallback?: JSX.Element | null;
}

const RenderAfterMounted = ({ children, fallback = null }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return children;
};

export default RenderAfterMounted;
