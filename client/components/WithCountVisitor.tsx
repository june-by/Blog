"use client";
import { addVisitorAPI } from "@services/visitor";
import { getIsVisitedWithInADay, setIsVisitedInStorage } from "@utils";
import React, { PropsWithChildren, useEffect } from "react";

const WithCountVisitor = ({ children }: PropsWithChildren) => {
  const countVisitor = async () => {
    const isVisitedWithInADay = getIsVisitedWithInADay();

    if (isVisitedWithInADay) {
      return;
    }

    setIsVisitedInStorage();
    await addVisitorAPI();
  };

  useEffect(() => {
    countVisitor();
  }, []);

  return <>{children}</>;
};

export default WithCountVisitor;
