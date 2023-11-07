"use server";

import { REVALIDATE_TAG } from "@constants";
import { revalidateTag } from "next/cache";

export async function revalidatePost(id: number) {
  revalidateTag(REVALIDATE_TAG.POST);
  revalidateTag(`${REVALIDATE_TAG.POST}${id}`);
}

export async function revalidateSnippet(id: number) {
  revalidateTag(REVALIDATE_TAG.SNIPPET);
  revalidateTag(`${REVALIDATE_TAG.SNIPPET}${id}`);
}

export async function revalidateSeries() {
  revalidateTag(REVALIDATE_TAG.SERIES);
}
