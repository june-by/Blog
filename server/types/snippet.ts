export interface SnippetAttribute {
  id: number;
  title: string;
  content: string;
  category: string;
}

export type SnippetCreationAttribute = Omit<SnippetAttribute, "id">;
