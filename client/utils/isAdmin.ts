import { UserType } from "Types/user";

export default function IsAdmin(User: UserType | null | undefined) {
  if (User?.nickname === "By_juun" && User?.provider === "local") return true;
  return false;
}
