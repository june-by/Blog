import React, { Suspense } from "react";
import { ArchiveContentProps } from "./types";
import ArchiveContent from "./ArchiveContent";

const ArchiveContentWithSuspense = <T extends Object>(
  props: ArchiveContentProps<T>
) => {
  return (
    <Suspense>
      <ArchiveContent {...props} />
    </Suspense>
  );
};

export default ArchiveContentWithSuspense;
