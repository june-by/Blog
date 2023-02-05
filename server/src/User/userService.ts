import model from "models";
import bcrypt from "bcrypt";
const { User } = model;

interface getUserParams {
  id?: number;
  nickname?: string;
  provider?: string;
  email?: string;
}

interface User {
  id: number;
  nickname: string;
  provider: string;
  email: string;
}

const getUser = async ({ id }: { id: number }): Promise<User> => {
  const user = await User.findOne({
    where: { id: id },
  });
  const fullUserWithoutPassword = await User.findOne({
    where: { id: user.id },
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
}: {
  email?: string;
  nickname: string;
  password?: string;
  provider?: string;
}) => {
  const hashedPassword = password ? await bcrypt.hash(password, 10) : "";
  await User.create({
    //await 안넣어주면, 비동기이기 때문에, 뒤에 res.json()이 먼저실행될수도있음.
    email: email || `${nickname}@kakao`,
    nickname: nickname,
    password: hashedPassword || "",
    provider: provider || "local",
  });
};

const checkEmailValidation = async ({ email }: { email: string }) => {
  const user = await User.findOne({
    //ID가 같은사람이 있는지 검사
    where: {
      email: email,
    },
  });
  return user ? true : false;
};

const checkNicknameValidation = async ({ nickname }: { nickname: string }) => {
  const user = await User.findOne({
    //nickname이 같은 사람이 있는지 검사
    where: {
      nickname: nickname,
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
