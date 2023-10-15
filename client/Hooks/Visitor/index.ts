import { useQuery } from "@tanstack/react-query";
import { getVisitorAPI } from "@services/visitor";
import { VisitorAPIType } from "@Types";
import { QUERY_KEY } from "@constants";

export const useGetVisitor = () =>
  useQuery<VisitorAPIType>([QUERY_KEY.VISITOR], getVisitorAPI, {
    retry: false,
    staleTime: 3000,
    refetchOnWindowFocus: false,
  });
