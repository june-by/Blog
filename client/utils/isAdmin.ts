import { UserType } from "@Types";

const IsAdmin = (User: UserType | null | undefined) =>
  User?.nickname === "By_juun" && User?.provider === "local";

export default IsAdmin;
