export interface PostAttribute {
  id: number;
  title: string;
  content: string;
  shortDescription: string;
  category: string;
  thumbNailUrl: string | null;
  views: number;
  isPublic: number;
  SeriesId: number;
}

export type PostCreationAttributes = Omit<PostAttribute, "id">;
