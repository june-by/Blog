import { useGetUserQuery } from "Hooks/User";
import IsAdmin from "utils/isAdmin";
import LoadingOrNot from "./LoadingOrNot";
import SwitchCase from "./SwitchCase";

interface Props {
  children: JSX.Element;
}

const WithAdminValidation = ({ children }: Props) => {
  const { data: userInfo, isLoading } = useGetUserQuery();
  const isAdmin = IsAdmin(userInfo);

  return (
    <LoadingOrNot isLoading={isLoading}>
      <SwitchCase
        value={String(isAdmin)}
        caseBy={{
          true: children,
          false: null,
        }}
      />
    </LoadingOrNot>
  );
};

export default WithAdminValidation;
