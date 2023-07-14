import { useRouter } from "next/router";

const useQueryId = () => {
  const { query } = useRouter();

  return Number(query.id);
};

export default useQueryId;
