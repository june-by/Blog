export interface ArchiveTagType {
  id: number;
  createdAt: Date;
  content: string;
  Posts: { id: number }[];
}
