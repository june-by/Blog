export interface UserAttribute {
  id: number;
  email?: string;
  nickname: string;
  password: string;
  provider?: string;
}

export type UserCreationAttribute = Omit<UserAttribute, "id">;
