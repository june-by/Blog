"use client";

import { MdKeyboardArrowUp } from "react-icons/md";
import React, { memo, useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <button
      className={`${
        !isVisible && "hidden"
      } z-10 w-[50px] h-[50px] fixed m-auto left-1/2 bottom-0 bg-white rounded-full cursor-pointer text-black translate-x-[-50%] translate-y-[-50%] shadow-[0px_2px_7px_#333d4b26] text-[9px] flex flex-col justify-center items-center`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
      <span className="font-semibold">TOP</span>
    </button>
  );
};

export default memo(ScrollToTopButton);
