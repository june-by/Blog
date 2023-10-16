import { ArchiveTagType } from "@Types";
import request from "@services/request";

export const getAllTags = async () =>
  request<ArchiveTagType[]>({
    method: "get",
    url: `/tag`,
  });
