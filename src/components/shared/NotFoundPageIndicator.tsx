"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NotFoundPageIndicator = ({ text = "존재하지 않는 페이지입니다." }) => {
  const router = useRouter();
  return (
    <div className="w-full h-[calc(85vh)] flex text-center flex-col items-center justify-center gap-4 translate-[-50%, -50%]">
      <h2 className="font-bold text-xl">{text}</h2>
      <button
        className="bg-blue-500 rounded-md px-6 py-3 text-white"
        onClick={() => router.replace("/")}
      >
        메인페이지로 이동
      </button>
    </div>
  );
};

export default NotFoundPageIndicator;
