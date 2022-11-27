import model from "models";
import bcrypt from "bcrypt";
const { User } = model;

const getUser = async ({ id }: { id: number }) => {
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
}: {
  email: string;
  nickname: string;
  password: string;
}) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    //await 안넣어주면, 비동기이기 때문에, 뒤에 res.json()이 먼저실행될수도있음.
    email: email,
    nickname: nickname,
    password: hashedPassword,
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
