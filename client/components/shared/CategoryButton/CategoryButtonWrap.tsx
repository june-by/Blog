"use client";

import { CategoryType } from "@constants";
import React, { useRef } from "react";
import CategoryButton from "./CategoryButton";
import { useSearchParams } from "next/navigation";
import useScrollIntoElement from "@hooks/useScrollIntoElement";

interface Props {
  category: CategoryType;
  length?: number | null;
}

const CategoryButtonWrap = (props: Props) => {
  const categoryButtonRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();

  const currentCategory = searchParams?.get("category");

  const isCurrentSelectedCategory = currentCategory === props.category;

  useScrollIntoElement({
    when: isCurrentSelectedCategory,
    element: categoryButtonRef.current,
    scrollOptions: {
      block: "nearest",
      inline: "center",
    },
  });

  return (
    <div ref={categoryButtonRef}>
      <CategoryButton
        {...props}
        isCurrentSelectedCategory={isCurrentSelectedCategory}
      />
    </div>
  );
};

export default CategoryButtonWrap;
