export interface TagAttribute {
  id: number;
  content: string;
}

export type TagCreationAttribute = Omit<TagAttribute, "id">;
