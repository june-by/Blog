import { CategoryType } from "constants/category";

export interface PostType {
  mainPost: MainPost;
  prevPost: OtherPostType;
  nextPost: OtherPostType;
}

export interface MainPost extends PostsType {
  content: string;
}

export interface OtherPostType {
  OtherId: number | null;
  OtherCreatedAt: Date | null;
  OtherTitle: string | null;
}

export interface PostsType {
  category: CategoryType;
  createdAt: Date;
  id: number;
  title: string;
  Tags: Array<TagType>;
  thumbNailUrl: string | null;
  views: number;
  isPublic: number;
  shortDescription: string;
  SeriesId: number;
}

type TagType = {
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

export interface PostFormType {
  title: string;
  category: CategoryType;
  content: string;
  tagArr: string[];
  thumbNailUrl: null | string;
  isPublic: number;
  shortDescription: string;
  SeriesId: string;
}
