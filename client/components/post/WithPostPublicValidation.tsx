import WithAdminValidation from "components/shared/WithAdminValidation";
import React from "react";

interface Props {
  isPublic: number;
  children: JSX.Element;
  fallback?: JSX.Element | null;
  onInvalid: () => void;
}

const WithPostPublicValidation = ({
  children,
  isPublic,
  fallback,
  onInvalid,
}: Props) => {
  if (isPublic) return <>{children}</>;
  else
    return (
      <WithAdminValidation fallback={fallback} onInvalid={onInvalid}>
        {children}
      </WithAdminValidation>
    );
};

export default WithPostPublicValidation;
