import GithubIcon from "components/Icon/github";
import KaKaoIcon from "components/Icon/kakao";
import { ServerURL } from "constants/serverURL";
import React from "react";
import styles from "./styles.module.scss";

const SocialLoginBtns = () => {
  const githubLogin = async () => {
    window.location.href = `${ServerURL}/user/githublogin`;
  };
  const kakaoLogin = () => {
    alert("카카오 로그인은 현재 준비중입니다.");
  };
  return (
    <div className={styles.SocialLoginBtns}>
      <h4>소셜 계정으로 로그인</h4>
      <div>
        <button className={styles.githubLoginBtn} onClick={githubLogin}>
          <GithubIcon />
        </button>
        <button className={styles.kakaoLoginBtn} onClick={kakaoLogin}>
          <KaKaoIcon />
        </button>
      </div>
    </div>
  );
};

export default SocialLoginBtns;
