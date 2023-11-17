import React from "react";
import styles from "./styles.module.scss";
import GithubIcon from "@components/Icon/github";
import KaKaoIcon from "@components/Icon/kakao";
import { ServerURL } from "@constants";

const SocialLoginArea = () => {
  const githubLogin = async () => {
    window.location.href = `${ServerURL}/user/githublogin`;
  };
  const kakaoLogin = () => {
    window.location.href = `${ServerURL}/user/kakaologin`;
  };
  return (
    <div className={styles.SocialLoginArea}>
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
export default SocialLoginArea;
