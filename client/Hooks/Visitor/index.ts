import { useQuery } from "react-query";
import { getVisitorAPI } from "API/Visitor";
import { VisitorAPIType } from "Types/Visitor";
import { QUERY_KEY } from "utils/queryKey";

export const useGetVisitor = () => {
  return useQuery<VisitorAPIType>([QUERY_KEY.VISITOR], () => getVisitorAPI(), {
    retry: false,
    staleTime: 3000,
    refetchOnWindowFocus: false,
  });
};
