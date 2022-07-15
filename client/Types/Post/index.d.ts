export interface PostType {
  mainPost: MainPost;
  prevPost: OtherPostType;
  nextPost: OtherPostType;
}

export interface MainPost {
  category: string;
  content: string;
  createdAt: Date;
  id: number;
  title: string;
  Comments: Array<null | CommentType>;
  Tags: Array<null | TagType>;
  thumbNailUrl: null | string;
  views: number;
}

export interface OtherPostType {
  OtherId: number | null;
  OtherCreatedAt: Date | null;
  OtherTitle: string | null;
}

export interface PostsType {
  category: string;
  createdAt: Date;
  id: number;
  title: string;
  Tags: Array<null | TagType>;
  thumbNailUrl: string | null;
  views: number;
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

export interface CategoryCount {
  category: string;
  count: number;
}
