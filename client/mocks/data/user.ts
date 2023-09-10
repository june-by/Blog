import { UserType } from "Types/user";

export const USER_MOCK_DATA: UserType = {
  createdAt: new Date(),
  email: "test@test.com",
  id: 10,
  nickname: "testUser",
  provider: "local",
};

export const ADMIN_MOCK_DATA: UserType = {
  createdAt: new Date(),
  email: "admin@admin.com",
  id: 1,
  nickname: "By_juun",
  provider: "local",
};
