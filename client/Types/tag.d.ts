export interface TagType {
  id: number;
  createdAt: Date;
  content: string;
  Posts: { id: number }[];
}
