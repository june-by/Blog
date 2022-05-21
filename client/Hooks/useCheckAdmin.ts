import { useRouter } from "next/router";
import { useEffect } from "react";
import { useGetUserInfo } from "./User";

const useCheckAdmin = () => {
  const { data: UserInfo, isLoading } = useGetUserInfo();
  const router = useRouter();
  useEffect(() => {
    if (UserInfo?.nickname !== "By_juun" && isLoading === false) router.push("/");
  }, [isLoading]);
};

export default useCheckAdmin;
