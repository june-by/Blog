import React, { ReactNode, forwardRef } from "react";
import styles from "./styles.module.scss";
import CloseIcon from "components/Icon/close";
import GithubIcon from "components/Icon/github";
import KaKaoIcon from "components/Icon/kakao";
import { ServerURL } from "constants/serverURL";

interface ModalProps {
  title: string;
  handleClose: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const ModalViewTitle = ({ title }: Pick<ModalProps, "title">) => {
  return <h1 className={styles.title}>{title}</h1>;
};

const ModalViewCloseButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & Pick<ModalProps, "handleClose">
) => {
  return (
    <button className={styles.closeButton} onClick={props.handleClose}>
      <CloseIcon />
    </button>
  );
};

const ModalViewHeader = ({ children }: Pick<ModalProps, "children">) => {
  return <div className={styles.header}>{children}</div>;
};

const ModalViewForm = (props: React.FormHTMLAttributes<HTMLFormElement> & Pick<ModalProps, "handleSubmit">) => {
  return <form className={styles.form} onSubmit={props.handleSubmit} {...props} />;
};

const ModalViewFormInput = forwardRef(
  (props: React.InputHTMLAttributes<HTMLInputElement>, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <input className={styles.input} ref={ref} {...props} />;
  }
);

const ModalViewFormButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={styles.submitButton} {...props} />;
};

const SocialLoginArea = () => {
  const githubLogin = async () => {
    window.location.href = `${ServerURL}/user/githublogin`;
  };
  const kakaoLogin = () => {
    window.location.href = `${ServerURL}/user/kakaologin`;
  };
  return (
    <div className={styles.socialLoginArea}>
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

const ModalView = Object.assign(({ children }: Pick<ModalProps, "children">) => <div>{children}</div>, {
  Header: ModalViewHeader,
  Title: ModalViewTitle,
  CloseButton: ModalViewCloseButton,
  Form: ModalViewForm,
  Input: ModalViewFormInput,
  SubmitButton: ModalViewFormButton,
  SocialLoginArea: SocialLoginArea,
});

export default ModalView;
