export interface PostType {
  category: string;
  content: string;
  createdAt: Date;
  id: number;
  title: string;
  Comments: Array<null | CommentType>;
  Tags: Array<null | TagType>;
  thumbNailUrl: null | string;
}

export interface PostsType {
  category: string;
  createdAt: Date;
  id: number;
  title: string;
  Tags: Array<null | TagType>;
  thumbNailUrl: string | null;
}

export interface CommentType {
  User: {
    nickname: string;
  };
  content: string;
  createdAt: Date;
}

export interface AddPostParams {
  title: string;
  category: string;
  content: string;
  tagArr: Array<string | null>;
  thumbNailUrl: string | null;
}

export interface TagType {
  id: number;
  content: string;
}
