import { useQuery } from "react-query";
import { getVisitorAPI } from "../../API/Visitor";
import { VisitorAPIType } from "../../Types/Visitor";

export const useGetVisitor = () => {
  return useQuery<VisitorAPIType>(["visitor"], () => getVisitorAPI(), {
    retry: false,
    staleTime: 3000,
    refetchOnWindowFocus: false,
  });
};
