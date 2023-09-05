import { useQuery } from "@tanstack/react-query";
import { getVisitorAPI } from "services/visitor";
import { VisitorAPIType } from "Types/visitor";
import QUERY_KEY from "constants/queryKey";

export const useGetVisitor = () => {
  return useQuery<VisitorAPIType>([QUERY_KEY.VISITOR], () => getVisitorAPI(), {
    retry: false,
    staleTime: 3000,
    refetchOnWindowFocus: false,
  });
};
