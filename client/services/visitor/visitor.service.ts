import { VisitorAPIType } from "@Types";
import request from "@services/request";

export const getVisitor = async () =>
  request<VisitorAPIType>({
    method: "get",
    url: `/visitor`,
    options: {
      cache: "no-store",
    },
  });

export const addVisitorAPI = async () =>
  request<VisitorAPIType>({
    method: "post",
    url: `/visitor`,
  });
