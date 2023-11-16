export interface PostAttribute {
  id: number;
  title: string;
  content: string;
  shortDescription: string;
  category: string;
  thumbNailUrl: string | null;
  views: number;
  isPublic: boolean;
  SeriesId: number;
}

export type PostCreationAttributes = Omit<PostAttribute, "id">;

export type TypeWithPage<T> = T & { page: string };
export type TypeWithOptionalPage<T> = T & { page?: string };
