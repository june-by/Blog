import { PostsType } from "./post";

export type AllSeriesAPIType = (SeriesType & {
  Posts: Pick<PostsType, "title" | "id">;
})[];

export type OneSeriesAPIType = SeriesType & {
  Posts: Omit<PostsType, "content">;
};

export interface SeriesType {
  title: string;
  shortDescription?: string;
  thumbNailUrl: string;
}
