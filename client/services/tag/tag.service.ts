import { ArchiveTagType } from "@Types";
import { REVALIDATE_TAG } from "@constants";
import request from "@services/request";

export const getAllTags = async () =>
  request<ArchiveTagType[]>({
    method: "get",
    url: `/tag`,
    options: {
      next: {
        tags: [REVALIDATE_TAG.POST],
      },
    },
  });
