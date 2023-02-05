import GithubIcon from "components/Icon/github";
import KaKaoIcon from "components/Icon/kakao";
import { ServerURL } from "constants/serverURL";
import React from "react";
import { customAxios } from "utils/CustomAxios";
import styles from "./styles.module.scss";

const client_id = "d4cd6b663e8f7cf8eab0";
const redirect_url = "http://localhost:3000/githubCallback";
const SocialLoginBtns = () => {
  const githubLogin = async () => {
    window.location.href = `${ServerURL}user/githublogin`;
    //window.location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_url}`;
  };
  return (
    <div className={styles.SocialLoginBtns}>
      <h4>소셜 계정으로 로그인</h4>
      <div>
        <button className={styles.githubLoginBtn} onClick={githubLogin}>
          <GithubIcon />
        </button>
        <button className={styles.kakaoLoginBtn}>
          <KaKaoIcon />
        </button>
      </div>
    </div>
  );
};

export default SocialLoginBtns;
