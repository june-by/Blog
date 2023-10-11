export interface SeriesAttribute {
  id: number;
  title: string;
  shortDescription: string;
  thumbNailUrl: string | null;
}

export type SeriesCreationAttribute = Omit<SeriesAttribute, "id">;
