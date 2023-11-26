import { AtLeast } from "./utils";

export interface PostType {
  category: string;
  createdAt: Date;
  id: number;
  title: string;
  Tags: Array<TagType>;
  thumbNailUrl: string | null;
  views: number;
  isPublic: boolean;
  shortDescription: string;
  SeriesId: number | null;
  content: string;
  seriesPosts: { id: number; title: string }[];
  seriesTitle: string;
}

export interface PostFormType
  extends Omit<
    PostType,
    "id" | "createdAt" | "Tags" | "views" | "seriesPosts" | "seriesTitle"
  > {
  tagArr: { value: string }[];
}

export type PostListPageDataType = Omit<
  PostType,
  "content" | "SeriesId" | "seriesPosts" | "seriesTitle"
>;
export interface PostPageDataType {
  mainPost: PostType;
  prevPost: OtherPostType;
  nextPost: OtherPostType;
}

export interface OtherPostType {
  OtherId: number | null;
  OtherCreatedAt: Date | null;
  OtherTitle: string | null;
}

export type TagType = {
  id: number;
  content: string;
} | null;

export interface CategoryCount {
  category: string;
  count: number;
}

export interface TopViewsPost {
  id: number;
  title: string;
}
