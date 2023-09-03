import { PostType } from "./post";

export type SnippetType = Pick<PostType, "id" | "title" | "category" | "content" | "createdAt">;

export type SnippetFormType = Omit<SnippetType, "createdAt" | "id">;

export type SnippetListPageDataType = Omit<SnippetType, "content">;
