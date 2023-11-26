"use client";
import { useThemeContext } from "@contexts/themeContext";
import React from "react";
import { ToastContainer as OriginToastContainer } from "react-toastify";

const ToastContainer = () => {
  const { theme } = useThemeContext();
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
      theme={theme}
    />
  );
};

export default ToastContainer;
