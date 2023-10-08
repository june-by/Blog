import { Users } from "models";
import bcrypt from "bcrypt";
import { UserAttribute, UserCreationAttribute } from "types";

const getUser = async ({ id }: Pick<UserAttribute, "id">) =>
  await Users.findOne({
    where: { id },
    attributes: {
      exclude: ["password"],
    },
  });

const addUser = async ({
  email,
  nickname,
  password,
  provider,
}: UserCreationAttribute) => {
  const hashedPassword = password ? await bcrypt.hash(password, 10) : "";
  await Users.create({
    email: email || `${nickname}@kakao`,
    nickname,
    password: hashedPassword || "",
    provider: provider || "local",
  });
};

const checkEmailValidation = async ({
  email,
}: Pick<UserAttribute, "email">) => {
  return !!(await Users.findOne({
    where: {
      email,
    },
  }));
};

const checkNicknameValidation = async ({
  nickname,
}: Pick<UserAttribute, "nickname">) => {
  const user = await Users.findOne({
    where: {
      nickname,
    },
  });
  return user ? true : false;
};

export default {
  getUser,
  addUser,
  checkEmailValidation,
  checkNicknameValidation,
};
