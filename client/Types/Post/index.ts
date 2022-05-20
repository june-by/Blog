export interface PostsType {
  category: string;
  createdAt: Date;
  id: number;
  title: string;
}

export interface CommentType {
  PostId: number;
  User: {
    color: string;
    id: number;
    nickname: string;
  };
  UserId: number;
  content: string;
  createdAt: Date;
  id: number;
  updatedAt: Date;
}
