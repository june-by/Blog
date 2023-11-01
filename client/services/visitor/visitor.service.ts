import { VisitorAPIType } from "@Types";
import request from "@services/request";

export const getVisitorAPI = async () =>
  request<VisitorAPIType>({
    method: "get",
    url: `/visitor`,
  });

export const addVisitorAPI = async () =>
  request<VisitorAPIType>({
    method: "post",
    url: `/visitor`,
  });
