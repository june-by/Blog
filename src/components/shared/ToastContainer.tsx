"use client";
import { useTheme } from "next-themes";
import React from "react";
import { ToastContainer as OriginToastContainer } from "react-toastify";

const ToastContainer = () => {
  const { theme } = useTheme();
  return (
    <OriginToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      draggable
      theme={theme as "light" | "dark"}
    />
  );
};

export default ToastContainer;
