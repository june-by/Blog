import { useSearchParams } from "next/navigation";
const useQueryId = () => {
  const searchParams = useSearchParams();
  return Number(searchParams?.get("id"));
};

export default useQueryId;
