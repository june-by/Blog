export interface RecentComment {
  id: number;
  content: string;
  Post: {
    id: number;
  };
}

export interface CommentType {
  User: {
    nickname: string;
  };
  content: string;
  createdAt: Date;
}
