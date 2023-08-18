import { PostsType } from "./post";

export type AllSeriesAPIType = (SeriesType & {
  Posts: Pick<PostsType, "title" | "id">[];
})[];

export interface SeriesType {
  id: number;
  title: string;
  shortDescription?: string;
  thumbNailUrl: string;
  createdAt: Date;
}
