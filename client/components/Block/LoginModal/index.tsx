import Image from "next/image";
import React, { useCallback } from "react";
import Modal from "../../../utils/Modal";
import styles from "./styles.module.scss";
interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ open, setOpen }: Props) => {
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <div>
      <Modal open={open} setOpen={setOpen}>
        <>
          <div className={styles.LoginTitle}>
            <span>로그인</span>
            <button onClick={closeModal}>
              <Image src="/close_btn.png" width={35} height={35} />
            </button>
          </div>
          <form className={styles.Form}>
            <input placeholder="이메일 혹은 아이디" />
            <input placeholder="비밀번호" />
            <button>로그인</button>
          </form>
        </>
      </Modal>
    </div>
  );
};

export default LoginModal;
