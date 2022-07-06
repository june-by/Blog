const { User } = require("../models");
const bcrypt = require("bcrypt");
const GetUserInfo = async (id) => {
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

const SignUpUser = async (email, nickname, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    //await 안넣어주면, 비동기이기 때문에, 뒤에 res.json()이 먼저실행될수도있음.
    email: email,
    nickname: nickname,
    password: hashedPassword,
  });
};

const CheckIdDuplicate = async (email, res) => {
  const user = await User.findOne({
    //ID가 같은사람이 있는지 검사
    where: {
      email: email,
    },
  });
  if (user) {
    return res.status(403).send("이미 사용 중인 아이디 입니다");
  }
};

const CheckNicknameDuplicate = async (nickname, res) => {
  const user = await User.findOne({
    //nickname이 같은 사람이 있는지 검사
    where: {
      nickname: nickname,
    },
  });
  if (user) {
    return res.status(403).send("이미 사용 중인 닉네임 입니다");
  }
};

const ChangeNickname = async (nickname, id) => {
  await User.update(
    {
      nickname: nickname,
    },
    {
      where: { id: id },
    }
  );
};

module.exports = { GetUserInfo, SignUpUser, CheckIdDuplicate, CheckNicknameDuplicate, ChangeNickname };
