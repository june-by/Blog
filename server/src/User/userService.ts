import { Users } from "models";
import bcrypt from "bcrypt";
import { UserAttribute, UserCreationAttribute } from "types/user";

const getUser = async ({
  id,
}: Pick<UserAttribute, "id">): Promise<UserAttribute | null> => {
  const user = await Users.findOne({
    where: { id },
  });

  const fullUserWithoutPassword = await Users.findOne({
    where: { id: user?.id },
    attributes: {
      exclude: ["password"],
    },
  });

  return fullUserWithoutPassword;
};

const addUser = async ({
  email,
  nickname,
  password,
  provider,
}: UserCreationAttribute) => {
  const hashedPassword = password ? await bcrypt.hash(password, 10) : "";
  await Users.create({
    //await 안넣어주면, 비동기이기 때문에, 뒤에 res.json()이 먼저실행될수도있음.
    email: email || `${nickname}@kakao`,
    nickname: nickname,
    password: hashedPassword || "",
    provider: provider || "local",
  });
};

const checkEmailValidation = async ({
  email,
}: Pick<UserAttribute, "email">) => {
  const user = await Users.findOne({
    //ID가 같은사람이 있는지 검사
    where: {
      email: email,
    },
  });
  return user ? true : false;
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
