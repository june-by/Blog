import { VisitorAPIType } from "Types/visitor";
import request from "services/request";

export const getVisitorAPI = async (): Promise<VisitorAPIType> =>
  request<VisitorAPIType>({
    method: "get",
    url: `/visitor`,
  });

export const postVisitorAPI = async () =>
  request<{ todayVisitor: number; totalVisitor: number }>({
    method: "post",
    url: `/visitor`,
  });
