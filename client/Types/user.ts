export interface UserType {
  createdAt: Date;
  email: string;
  id: number;
  nickname: string;
  provider: string;
}

export type UserFormDataType = Pick<UserType, "email" | "nickname"> & {
  password: string;
};
