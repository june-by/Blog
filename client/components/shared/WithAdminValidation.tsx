import { useGetUserQuery } from "Hooks/User";
import IsAdmin from "utils/isAdmin";
import LoadingOrNot from "./LoadingOrNot";
import SwitchCase from "./SwitchCase";
import { useEffect } from "react";

interface Props {
  children: JSX.Element;
  fallback?: JSX.Element | null;
  onInvalid?: () => void;
}

const WithAdminValidation = ({
  children,
  fallback = null,
  onInvalid,
}: Props) => {
  const { data: userInfo, isLoading } = useGetUserQuery();
  const isAdmin = IsAdmin(userInfo);

  useEffect(() => {
    if (!onInvalid) return;
    if (isLoading) return;
    if (!IsAdmin(userInfo)) onInvalid();
  }, [isLoading, onInvalid, userInfo]);

  return (
    <LoadingOrNot isLoading={isLoading} onLoading={fallback}>
      <SwitchCase
        value={String(isAdmin)}
        caseBy={{
          true: children,
          false: fallback,
        }}
      />
    </LoadingOrNot>
  );
};

export default WithAdminValidation;
