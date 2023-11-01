"use client";
import { useThemeContext } from "@contexts/themeContext";
import React from "react";
import { ToastContainer } from "react-toastify";

const MyToastContainer = () => {
  const { theme } = useThemeContext();
  return (
    <ToastContainer
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

export default MyToastContainer;
