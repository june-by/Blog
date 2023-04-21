import styles from "./styles.module.scss";
import React from "react";
import { Category } from "constants/category";
import { AiOutlineSearch, AiOutlineLogin, AiOutlineUser, AiOutlineHtml5, AiOutlineLogout } from "react-icons/ai";
import { SiTypescript, SiJavascript, SiReact } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { BiBookContent } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { BsHddNetwork, BsGit, BsPencilSquare } from "react-icons/bs";
import { useMobileMenuContext } from "context/mobileMenuContext";
import { useRouter } from "next/router";
import { useLogOut } from "Hooks/User";
import { useHeaderContext } from "context/headerContext";

const MobileMenu = ["검색", "로그인", "회원가입", ...Category] as const;

const MenuIcon: { [key: typeof MobileMenu[number]]: JSX.Element } = {
  검색: <AiOutlineSearch />,
  로그인: <AiOutlineLogin />,
  회원가입: <AiOutlineUser />,
  로그아웃: <AiOutlineLogout />,
  JavaScript: <SiJavascript />,
  React: <SiReact />,
  Web: <CgWebsite />,
  TypeScript: <SiTypescript />,
  Book: <BiBookContent />,
  NodeJs: <FaNodeJs />,
  OperatingSystem: <RiComputerLine />,
  NetWork: <BsHddNetwork />,
  "HTML-CSS": <AiOutlineHtml5 />,
  Git: <BsGit />,
  회고: <BsPencilSquare />,
};

interface Props {
  menu: string;
}

const MobileMenuItem = ({ menu }: Props) => {
  const { toggleShowMobileMenu } = useMobileMenuContext();
  const { push } = useRouter();
  const { mutate: logoutMutate } = useLogOut();
  const { openSignUp, openLogin, openSearch } = useHeaderContext();

  const handleAccount = (type: string) => {
    switch (type) {
      case "검색":
        return openSearch();
      case "로그인":
        return openLogin();
      case "회원가입":
        return openSignUp();
      case "로그아웃":
        return logoutMutate();
    }
  };

  const gotoCategoryPage = (category: string) => {
    toggleShowMobileMenu();
    push({ pathname: "/posts", query: { category } });
  };

  const onClickMenuItem = () => {
    const type = Category.includes(menu) ? "Category" : "Account";
    if (type === "Account") handleAccount(menu);
    else gotoCategoryPage(menu);
  };

  return (
    <button onClick={onClickMenuItem}>
      <div>{MenuIcon[menu]}</div>
      <span>{menu}</span>
    </button>
  );
};

export default MobileMenuItem;
