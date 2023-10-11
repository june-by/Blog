export interface VisitorAttribute {
  id: number;
  date: string;
}

export type VisitorCreationAttribute = Omit<VisitorAttribute, "id">;
