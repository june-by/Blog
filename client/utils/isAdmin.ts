import { UserType } from "Types/user";

const IsAdmin = (User: UserType | null | undefined) =>
  User?.nickname === "By_juun" && User?.provider === "local";

export default IsAdmin;
